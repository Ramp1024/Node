import {storage} from "../firebase"
import {useState} from "react"
import axios from 'axios'
import'./UpdateImages.css'

function UpdateImages() {
  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)
  const [url1, setUrl1] = useState("")
  const [url2, setUrl2] = useState("")
  const [url3, setUrl3] = useState("")
  const [progress1, setProgress1] = useState(0)
  const [progress2, setProgress2] = useState(0)
  const [progress3, setProgress3] = useState(0)
  const [username, setusername] = useState("")

  const handleChange1 = e => {
    if(e.target.files[0]){
      setImage1(e.target.files[0])
    }
  }

  const handleChange2 = e => {
    if(e.target.files[0]){
      setImage2(e.target.files[0])
    }
  }

  const handleChange3 = e => {
    if(e.target.files[0]){
      setImage3(e.target.files[0])
    }
  }
  
  //console.log("Image : ",image);

  const handleUpload1 = () => {
    const uploadTask1 = storage.ref(`images/${image1.name}`).put(image1);
    uploadTask1.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress1(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image1.name)
          .getDownloadURL()
          .then(url => {
            setUrl1(url) 
          });
      }
    );
  }

  const handleUpload2 = () => {
    const uploadTask2 = storage.ref(`images/${image2.name}`).put(image2);
    uploadTask2.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress2(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image2.name)
            .getDownloadURL()
            .then(url => {
              setUrl2(url) 
            });
        }
      );
     
  }

  const handleUpload3 = () => {
    const uploadTask3 = storage.ref(`images/${image3.name}`).put(image3);
      uploadTask3.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress3(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image3.name)
            .getDownloadURL()
            .then(url => {
              setUrl3(url) 
            });
        }
      );
  }

  return (
    <div className="update_images_full">
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Turret+Road:wght@800&display=swap');
      </style>
      <div className="username_images">
        <h1>Upload Images for Client</h1>
        <input type="text" name="username" onChange={(e)=>{setusername(e.target.value)}} placeholder="Username" />
      </div>
      <div className="images_1">
        <progress value={progress1} max="100"/>
        <input type="file" onChange={handleChange1} />
        <button onClick={handleUpload1}>Upload</button>
      </div>
      <div className="images_1">
        <progress value={progress2} max="100"/> 
      <input type="file" onChange={handleChange2} />
      <button onClick={handleUpload2}>Upload</button>
      </div>
      <div className="images_1">
        <progress value={progress3} max="100"/>
        <input type="file" onChange={handleChange3} />
        <button onClick={handleUpload3}>Upload</button>
      </div>
      <button type="button" onClick={()=>{
        const book = {
            username : username,
            designPhoto : url1,
            planPhoto : url2,
            workPhoto : url3
          };
      
          axios
          .post('http://localhost:9000/client-details-image',book)
          .then((res) => {
            console.log(res.data);
          })
          .catch(err => {
            console.error(err);
          })
        }}>Submit</button>
    </div>
  );
}

export default UpdateImages;
