import { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
export default function Index() {
    const [point1,setPoint1] = useState({x:0,y:0})
    const [point2,setPoint2] = useState({x:0,y:0})
    const parentRef = useRef()
    const sourceRef = useRef()
    const targetRef = useRef()
    useEffect(()=>{
        const {left: sourceLeft, top: sourceTop} = sourceRef.current.getBoundingClientRect()
        const {left: targetLeft, top: targetTop} = targetRef.current.getBoundingClientRect()
        const {left: parentLeft, top: parentTop} = parentRef.current.getBoundingClientRect()

        setPoint1({x: sourceLeft-parentLeft+5,y: sourceTop- parentTop+5})
        setPoint2({x: targetLeft-parentLeft + 5,y:targetTop-parentTop +5})
    }, [])
    return <div className={styles.container} ref={parentRef}>
        <div className={styles.text}>
            凳子
            <div className={styles.circleText}  ref={sourceRef}></div>
        </div>
        <div className={styles.image}>
            <div className={styles.box}>
                <div className={styles.circle} ref={targetRef}></div>
            </div>
        </div>
       <svg className={styles.svg} width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <line x1={point1.x} y1={point1.y} x2={point2.x} y2={point2.y} className={styles.line}></line>
       </svg>
    </div>
}