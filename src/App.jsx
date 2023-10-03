import { useEffect, useState } from 'react'
import './App.css'
import { FallingLines } from 'react-loader-spinner';

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
  const noImage = <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=740" alt="" />
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
                <div key={image.id} className='shadow-2xl p-2 rounded-xl'>
                  {
                    image.image ? <img src={image.image} alt="" /> : noImage
                  }
                  <p className='mt-10 text-center'>{image.description}</p>
                </div>
              ))
            }
          </div>
      }

    </div>
  )
}

export default App
