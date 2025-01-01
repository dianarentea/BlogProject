import React, {useState} from 'react';
import { Navbar, Slideshow ,Footer } from "@components";
import "./yourStoryPage.css";

const YourStoryPage = () => {

    const [images, setImages] = useState([]);
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleImageUpload = (event) => {
        const files = event.target.files;
        if (files.length + images.length <= 3) {
        setImages((prevImages) => [
            ...prevImages,
            ...Array.from(files).map((file) => URL.createObjectURL(file)),
        ]);
        } else {
        alert("You can upload a maximum of 3 images.");
        }
    };

    const removeImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        const formData = new FormData();
        formData.append('email', email);
        formData.append('title', title);
        formData.append('description', description);

        images.forEach((image) => {
            formData.append('images', image);
        });

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error uploading the form data');
            }

            alert('Your story was submitted successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting your story.');
        }
    };

   return (
           <div>
               <div className="container">
                   <div className="slideshow-container">
                       <Slideshow />
                   </div>
                   <Navbar />
                   <hr/>
                   <div className="newsletter-container">
                       <div className="text-container">
                       <h1>Everyone has a story to tell...</h1>
                        <p>If you reached this blog, for sure you've already had a trip or you plan one!</p>
                        <p>No matter how short was your hiking, we all know that you saw beautiful views or places. So, let us to know what are your impressions and why we must see the place you visited!</p>
                        <p>Below you have a form where you can write your story and add some pictures from the trip. We're gonna let your story untouched - we may correct the missed letters - and let the others to see your <span>authentic story.</span></p>
                       </div>
                       <form onSubmit={handleSubmit}>
                            <input type="email" className="email-input" placeholder="Enter a valid email address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <input type="text" className="title-input" placeholder="Enter the title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                            <textarea type="text" className="description-input" placeholder="Write your story here" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                            
                            <div className="image-upload-container">
                            {images.length < 3 && (
                                <label className="image-upload-label">
                                <input type="file" className="image-upload" onChange={handleImageUpload} accept="image/*" multiple/>
                                <div className="plus-box">+</div>
                                </label>
                            )}

                            <div className="uploaded-images">
                                {images.map((image, index) => (
                                <div key={index} className="image-thumbnail">
                                    <img src={image} alt={`Uploaded thumbnail ${index}`} />
                                    <button type="button" onClick={() => removeImage(index)}>X</button>
                                </div>
                                ))}
                            </div>
                            </div>

                            <button type="submit" className="button-form">SUBMIT</button>
                       </form>
                   </div>
               </div>
               <Footer/>
           </div>
    );
}

export default YourStoryPage;