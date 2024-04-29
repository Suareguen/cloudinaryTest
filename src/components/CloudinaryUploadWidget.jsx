import  { useEffect, useRef } from 'react';

const CloudinaryUploadWidget = ({ onSuccess }) => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: 'dqbnfssf8',
        uploadPreset: 'qdaweavf'
    }, function(erro, result ) {
        if(result.event === 'success') {
            onSuccess(result.info.secure_url)
        }
        console.log(result)
    })
  }, [])

  return (
    <button className="cloudinary-button" onClick={() => widgetRef.current.open()}>
      Upload Image
    </button>
  );
};

export default CloudinaryUploadWidget;
