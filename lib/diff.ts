function isEqual(obj1, obj2) {
  // 如果两个对象的引用相同，则返回 true
  if (obj1 === obj2) {
    return true;
  }

  // 如果两个对象的类型不同，则返回 false
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // 如果两个对象的类型都是原始类型，则比较它们的值
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return obj1 === obj2;
  }

  // 如果两个对象的类型都是对象类型，则比较它们的属性
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (!isEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

export function customDiff(newData, oldData) {
  const addedNodes = [];
  const addedEdges = [];
  const updatedNodes = [];
  const updatedEdges = [];
  const deletedNodes = [];
  const deletedEdges = [];

  // 查找新增的节点和边
  newData.nodes.forEach(function (newNode) {
    const oldNode = oldData.nodes.find(function (node) {
      return node.data.id === newNode.data.id;
    });
    if (!oldNode) {
      addedNodes.push(newNode);
    } else if (!isEqual(newNode, oldNode)) {
      updatedNodes.push(newNode);
    }
  });

  newData.edges.forEach(function (newEdge) {
    const oldEdge = oldData.edges.find(function (edge) {
      return edge.data.id === newEdge.data.id;
    });
    if (!oldEdge) {
      addedEdges.push(newEdge);
    } else if (!isEqual(newEdge, oldEdge)) {
      updatedEdges.push(newEdge);
    }
  });

  // 查找删除的节点和边
  oldData.nodes.forEach(function (oldNode) {
    const newNode = newData.nodes.find(function (node) {
      return node.data.id === oldNode.data.id;
    });
    if (!newNode) {
      deletedNodes.push(oldNode);
    }
  });

  oldData.edges.forEach(function (oldEdge) {
    const newEdge = newData.edges.find(function (edge) {
      return edge.data.id === oldEdge.data.id;
    });
    if (!newEdge) {
      deletedEdges.push(oldEdge);
    }
  });

  return {
    nodes: {
      added: addedNodes,
      updated: updatedNodes,
      deleted: deletedNodes,
    },
    edges: {
      added: addedEdges,
      updated: updatedEdges,
      deleted: deletedEdges,
    },
  };
}
