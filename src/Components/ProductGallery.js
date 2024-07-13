import { useSelector, useDispatch } from 'react-redux'

import styles from './ProductGallery.module.css'
import { useState } from 'react'

export default function ProductGallery({ index, mainPic, pics, name }) {

  const dispatch = useDispatch()
  const IsFav = useSelector(state => state.IsFav)
  const [show, setShow] = useState(IsFav.includes(index))

  const click = (e) => {
    if (e.target.id !== 'smallImages') {
      document.getElementById('smallImages').childNodes.forEach(element => {
        return element.classList.remove(styles.active)
      })
      e.target.classList.add(styles.active)
      document.getElementById('mainImg').style.backgroundImage = `url('${e.target.src}')`
    }
  }

  const fav = (e) => {
    if (IsFav.includes(index)) {
      dispatch({ type: 'DELETE_FAV', payload: index })
      setShow(false)
    }
    else {
      dispatch({ type: 'ADD_FAV', payload: index })
      setShow(true)
    }
  }

  return (
    <div className={`d-flex ${styles.container}`}>
      <div className={`d-flex flex-column m-5 ${styles.smallImages}`} id='smallImages' onClick={click}>
        <img src={mainPic} alt={name} className={styles.active} />
        {pics.map((element, index) => {
          return <img key={index} src={element} alt={name} />
        })}


      </div>
      <div className={styles.mainImg} style={{ backgroundImage: `url('${mainPic}')` }} id='mainImg' >
        <div className={styles.fav} onClick={fav}>
          {show
            ? <svg id='icon2' xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 16 16"><path fill="#ff0000" fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15C-7.534 4.736 3.562-3.248 8 1.314"></path></svg>
            : <svg id='icon1' xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 16 16"><path fill="#ff0000" d="m8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385c.92 1.815 2.834 3.989 6.286 6.357c3.452-2.368 5.365-4.542 6.286-6.357c.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"></path></svg>}


        </div>
      </div>
    </div>
  )
}
