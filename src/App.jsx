import { useEffect, useState } from 'react'
import './App.css'
import { FallingLines } from 'react-loader-spinner';
import ImageContainer from './ImageContainer';

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json()).then(data => {
        setImages(data);
        setLoader(false);
      })
  }, []);
  return (
    <div className='max-w-screen-xl mx-auto my-20 '>
      <h1 className='my-10 text-center font-semibold text-4xl'>Image Gallery</h1>
      {
        loader ?
          <div className='flex justify-center'>
            <FallingLines
              color="#4fa94d"
              width="100"
              visible={true}
              ariaLabel='falling-lines-loading'
            />
          </div> :
          <div className='grid grid-cols-3 gap-10'>
            {
              images.map(image => (
                <ImageContainer key={image.id} image={image}></ImageContainer>
              ))
            }
          </div>
      }

    </div>
  )
}

export default App
