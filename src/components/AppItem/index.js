// Write your code here
import './index.css'

const AppItem = props => {
  const {AppDetails} = props
  const {appName, imageUrl} = AppDetails

  return (
    <li className="app-item">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
