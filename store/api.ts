import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AibabyIoEvent from "./message";
import { getAibabySocket } from "../services";
import { logger } from "../lib/utils";
import { changePg } from "./graphSlice";
import { io } from "socket.io-client";
const log = logger("api");

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/socket",
  }),
  endpoints: (builder) => ({
    getMessage: builder.query<void, void>({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(
        arg,
        { cacheDataLoaded, cacheEntryRemoved, dispatch }
      ) {
        try {
          await cacheDataLoaded;
          // await fetch("http://localhost:3000/api/socket");
          // const socket = io({
          //   transports: ["websocket"],
          // });
          const socket = getAibabySocket();

          socket.on("connect", () => {
            log("connect");
            socket.emit("connect success");
          });
          socket.on("connect_error", (error) => {
            log("connect_error");
          });
          socket.on("disconnect", () => {
            log("disconnect");
          });

          // pg信息，pg数据结构tree->graph，add nlp directive
          socket.on(AibabyIoEvent.RecvPgPlus, ({ data }: { data: any }) => {
            log("data====", data);
            dispatch(changePg(data));
          });

          await cacheEntryRemoved;
          socket.off("connect");
          socket.off("connect_error");
          socket.off("disconnect");
          socket.off(AibabyIoEvent.RecvPgPlus);
        } catch {}
      },
    }),
  }),
});

export const { useGetMessageQuery } = api;

export default api;
