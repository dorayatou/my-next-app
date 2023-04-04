import { createRef, forwardRef, useEffect, useRef, useState } from 'react'
import './index.scss'
import gsap from 'gsap'
import useModal, { useModalFromMouse } from 'src/hooks/useModal'
window.gsap = gsap

function FLIP() {
  const ref = createRef<HTMLDivElement>()
  const [flag, setFlag] = useState(false)
  function moveRight() {
    // First: get the current bounds
    const first = ref.current.getBoundingClientRect()

    // execute the script that causes layout change
    // doSomething()
    if (flag) {
      ref.current?.classList.remove('moveRight')
      setFlag(false)
    } else {
      ref.current?.classList.add('moveRight')
      setFlag(true)
    }

    // Last: get the final bounds
    const last = ref.current.getBoundingClientRect()

    // Invert: determine the delta between the first and last bounds to invert the element
    const deltaX = first.left - last.left
    const deltaY = first.top - last.top
    const deltaW = first.width / last.width
    const deltaH = first.height / last.height
    // Play: animate the final element from its first bounds to its last bounds (which is no transform)

    ref.current.animate(
      [
        {
          transformOrigin: 'top left',
          transform: `
            translate(${deltaX}px, ${deltaY}px)
            scale(${deltaW}, ${deltaH})
          `,
        },
        {
          transformOrigin: 'top left',
          transform: 'none',
        },
      ],
      {
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'both',
      }
    )
  }
  useEffect(() => {}, [])
  return <div ref={ref} className="blueBox" onClick={moveRight}></div>
}

function FLIPShared() {
  const ref1 = createRef<HTMLDivElement>()
  const ref2 = createRef<HTMLDivElement>()

  const [flag, setFlag] = useState(false)
  function moveRight() {
    // First: get the current bounds
    const first = ref1.current.getBoundingClientRect()

    // execute the script that causes layout change
    // doSomething()
    ref2.current.style.display = 'block'

    // Last: get the final bounds
    const last = ref2.current.getBoundingClientRect()

    // Invert: determine the delta between the first and last bounds to invert the element
    const deltaX = first.left - last.left
    const deltaY = first.top - last.top
    const deltaW = first.width / last.width
    const deltaH = first.height / last.height
    // Play: animate the final element from its first bounds to its last bounds (which is no transform)

    ref2.current.animate(
      [
        {
          transformOrigin: 'top left',
          transform: `
            translate(${deltaX}px, ${deltaY}px)
            scale(${deltaW}, ${deltaH})
          `,
        },
        {
          transformOrigin: 'top left',
        },
      ],
      {
        duration: 300,
        easing: 'ease',
      }
    )
  }
  function moveLeft() {
    // First: get the current bounds
    const first = ref2.current.getBoundingClientRect()

    // execute the script that causes layout change
    // doSomething()
    ref2.current.style.display = 'none'

    // Last: get the final bounds
    const last = ref1.current.getBoundingClientRect()

    // Invert: determine the delta between the first and last bounds to invert the element
    const deltaX = first.left - last.left
    const deltaY = first.top - last.top
    const deltaW = first.width / last.width
    const deltaH = first.height / last.height
    // Play: animate the final element from its first bounds to its last bounds (which is no transform)

    ref1.current.animate(
      [
        {
          zIndex: 2,
          transform: `
            translate(${deltaX}px, ${deltaY}px)
            scale(${deltaW}, ${deltaH})
          `,
        },
        {
          zIndex: 2,
          transform: 'none',
        },
      ],
      {
        duration: 300,
        easing: 'ease',
      }
    )
  }
  return (
    <>
      <div className="btnBox">
        <button onClick={moveRight}>放大</button>
        <button onClick={moveLeft}>缩小</button>
      </div>

      <div ref={ref1} className="blueBox">
        <p>标题</p>
        <p>内容</p>
      </div>
      <div ref={ref2} className="redBox">
        <p>标题</p>
        <p>内容</p>
      </div>
    </>
  )
}

type mousePosition = {
  x: number
  y: number
}
// display的元素是不参与布局的，其getBoundingClientRect返回的DOMRect均为0
/**
 * 1、支持从鼠标点击点产生动画，from mouse click point
 * 2、支持从鼠标点击所在元素产生动画，from the clicked element
 * 3、从特定元素开始产生动画
 * @returns
 */
function ModalOriginPoint() {
  const ref = createRef<HTMLDivElement>()
  const ref1 = createRef<HTMLDivElement>()
  const fromRef = useRef<HTMLDivElement>()
  const mousePosition = useRef<mousePosition>()
  const [showFlag, setShowFlag] = useState(false)
  const elemRef = useRef<HTMLElement>()
  function clickFn(e) {
    console.log('e', e)
    elemRef.current = fromRef.current
    // elemRef.current = e.target
    mousePosition.current = { x: e.clientX, y: e.clientY }
    setShowFlag(true)
  }
  function closeFn() {
    setShowFlag(false)
  }

  return (
    <>
      {showFlag && (
        <ModalNew
          closeFn={closeFn}
          mousePosition={mousePosition.current}
          from={elemRef.current}
        />
      )}
      <div className="yellowBox" ref={fromRef}></div>
      <div className="summaryLinks">
        <div className="summaryLinksContainer">
          <div className="btn" id="tradeButton" ref={ref} onClick={clickFn}>
            Trade
          </div>
          <div className="btn" id="transferButton" ref={ref1} onClick={clickFn}>
            Transfer
          </div>
          <div className="btn" id="paybillsButton" onClick={clickFn}>
            Pay Bills
          </div>
        </div>
      </div>
    </>
  )
}
// 如果采用点击元素的坐标值
// 这里是否可以做成一个hooks
function Modal(props: any, ref1) {
  // Modal出场动效有Modal组件控制
  const ref = createRef<HTMLDivElement>()
  const originRect = useRef<any>()
  // elem 弹层元素, target被点击的元素
  function getPosition(targetElement: HTMLElement, clickElement: HTMLElement) {
    let clickElemRect = clickElement.getBoundingClientRect()
    let targetElemRect = targetElement.getBoundingClientRect() // 弹层元素
    // 将modal设置为被点击元素的大小
    // x,y的意思是相对于原始位置的移动值，transform
    gsap.set(targetElement, {
      x: 0,
      y: 0,
      width: clickElemRect.width,
      height: clickElemRect.height,
    })

    let tmpRect = targetElement.getBoundingClientRect()
    // 这里是modal弹层的最终值
    gsap.set(targetElement, {
      width: targetElemRect.width,
      height: targetElemRect.height,
    })

    // 这里是modal弹层初始的值
    return {
      left: clickElemRect.left - tmpRect.left,
      top: clickElemRect.top - tmpRect.top,
      width: tmpRect.width,
      height: tmpRect.height,
    }
  }
  // 设计你的出场效果吧
  useEffect(() => {
    originRect.current = ref.current?.getBoundingClientRect()
    let newRect = getPosition(ref.current, ref1.current)
    // 初始值
    gsap.set(ref.current, {
      x: newRect.left,
      y: newRect.top,
      width: newRect.width,
      height: newRect.height,
    })

    let show = gsap.timeline()

    // 目标值
    show.to(ref.current, {
      x: 0,
      y: 0,
      width: originRect.current.width,
      height: originRect.current.height,
      autoAlpha: 1,
      duration: 0.2,
    })
  })
  // 关闭按钮是属于Modal组件的，其逻辑也应该在modal组件内
  function closeFn() {
    let newRect = getPosition(ref.current, ref1.current)
    let hide = gsap.timeline()

    gsap.killTweensOf(ref.current)
    hide
      .to(ref.current, {
        autoAlpha: 0,
        x: newRect.left,
        y: newRect.top,
        height: newRect.height,
        width: newRect.width,
        duration: 0.2,
      })
      .then(() => {
        props.closeFn()
      })
  }
  return (
    <div className="modalContainer">
      <div className="messageWrapper" ref={ref}>
        <button onClick={closeFn}>关闭</button>
        <div className="message">Message</div>
      </div>
    </div>
  )
}

function ModalNew(props: any) {
  // Modal出场动效有Modal组件控制
  const ref = createRef<HTMLDivElement>()
  const { openModal, closeModal } = useModal()

  function closeFn() {
    closeModal(props.from, ref.current).then(() => {
      props.closeFn()
    })
  }

  useEffect(() => {
    openModal(props.from, ref.current)
  })

  return (
    <div className="modalContainer">
      <div className="messageWrapper" ref={ref}>
        <button onClick={closeFn}>关闭</button>
        <div className="message">Message</div>
      </div>
    </div>
  )
}
function ModalThree(props: any, ref1) {
  // Modal出场动效有Modal组件控制
  const ref = createRef<HTMLDivElement>()
  const { openModal, closeModal } = useModalFromMouse()

  function closeFn() {
    closeModal(props.mousePosition, ref.current).then(() => {
      props.closeFn()
    })
  }

  useEffect(() => {
    openModal(props.mousePosition, ref.current)
  })

  return (
    <div className="modalContainer">
      <div className="messageWrapper" ref={ref}>
        <button onClick={closeFn}>关闭</button>
        <div className="message">Message</div>
      </div>
    </div>
  )
}

function TimelineDemo() {
  const ref = createRef<HTMLDivElement>()
  function myFunction() {
    alert('end')
  }
  useEffect(() => {
    let t1 = gsap.timeline({
      repeat: 3,
      repeatDelay: 1,
      onComplete: myFunction,
    })
    t1.to(ref.current, { left: 20, top: 100 })
    t1.to(ref.current, { opacity: 0 }, '+=1')
    t1.add(gsap.to(ref.current, { left: 200, top: 100, duration: 1 }))
    t1.add(gsap.to(ref.current, { opacity: 0, duration: 0.5 }))
    t1.add(gsap.to(ref.current, { rotation: 30, duration: 1 }))

    t1.reverse()
    t1.addLabel('spin', 3)
  }, [])
  return (
    <div id="element" className="blueBox" ref={ref}>
      element
    </div>
  )
}

// const ModalRef = forwardRef(ModalNew)
export default TimelineDemo
