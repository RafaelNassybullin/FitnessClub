import React from "react";
import styled from 'styled-components'
import {motion, AnimatePresence} from "framer-motion/dist/framer-motion";

function Drawerr({isActive, setIsActive, children}) {

    return (
        <>
            <AnimatePresence>
                {isActive && <>
                    <DrawerWrap
                        drag='y'
                        dragConstraints={{top: 0, bottom: 0}}
                        onDragEnd={(event, info) => {
                            if (info.offset.y > 200) {
                                setIsActive(false)
                            }
                        }}
                    >
                        <motion.div
                            exit={{opacity: 1, y: '110%'}}
                            initial={{opacity: 1, y: '110%'}}
                            animate={{opacity: 1, y: 0}}
                            transition={{damping: 20, type: 'spring'}}
                        >
                            <Drawer>
                                <Button onClick={() => setIsActive(false)}>X</Button>
                                {children}
                            </Drawer>
                        </motion.div>
                    </DrawerWrap>
                    <Background
                        onClick={() => setIsActive(false)}
                        exit={{opacity: 0}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                    />
                </>
                }
            </AnimatePresence>
        </>
    );
}

export default Drawerr;
//====================Styled-Components=========================>
const Button = styled.button`
  background: #de19bf;
  font-size: 18px;
  font-weight: 700;
  border-radius: 50px;
  margin: 20px;
  outline: none;
  border: none;
  padding: 15px 20px;
  color: white;
  cursor: pointer;

  &:hover {
    background: pink;
  }
`
const DrawerWrap = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: calc(100% - 3rem);
  bottom: 0;
  left: 0;
  z-index: 10;
`
const Drawer = styled.div`
  height: calc(100vh + 400px);
  padding: 2em 2em 400px 2em;
  background: black;
  box-shadow: 5px 5px 10px #c9c9c9;
  border-radius: 28px 28px 0 0;

  h1 {
    color: white;
  }

  Button {
    position: absolute;
    top: -4%;
    right: 0;
  }
`
const Background = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
`