// import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'



const Header = ({title, onAdd, showAdd}) => {
  // const onClick = () => {
  //   console.log('clicked')
  // }

  const location = useLocation()

  return (
    <header className="header">
        <h1>{title}</h1>
        {location.pathname === '/' && (
        <Button 
        color = {showAdd?'red':'black'} 
        text={showAdd? 'Close': 'Add'}
        onClick = {onAdd} />
        )}
    </header>
  )
}

// assign title string in a header object
// Header.defaultProps = {
//     title: 'Task Tracker'
// }




export default Header