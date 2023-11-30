
import './App.css'
import Photo from './Components/Photo';

const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = 'K94Zcfj55KWoHu8AB1rj6Q4hdcFjsgAfyfo97Zjs'

function fetchData(){
  try{
    fetch(baseUrl+apiKey)
    .then(response=>response.json())
    .then(json=>{
      console.log(json)
    })
  }catch(error){
    console.log(error)
  }
}
fetchData()



function App() {


  return (
    <>
    <Photo />
    </>
  )
}

export default App
