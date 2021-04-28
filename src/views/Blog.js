import React,{useEffect,useState} from 'react';
import ReactMarkdown from "react-markdown";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const BLOGURL = "http://34.66.0.133:1337/blog-posts";
const sampleData = [{"id":1,"Title":"Articles.","Content":"","Description":"","Tag":"","PublishedBy":"","PublishedOn":"","published_at":"2021-04-28T19:37:59.541Z","created_at":"2021-04-28T19:37:56.053Z","updated_at":"2021-04-28T19:37:59.555Z"}]
export default function Blog() {
  const [posts,setPosts] = useState(sampleData)
  useEffect(()=>{
  fetch(BLOGURL).then((response) => response.json()).then((data) => setPosts(data))
  },[])
    return(
        <>
        <Navbar />
        <main className="bg-gray-100 text-gray-700 font-sans quicksand">
            <div className="p-6 sm:p-10 md:p-16 flex flex-wrap">
                <div className="w-full md:w-1/2 md:pr-32 order-3 md:order-1">
                    <div className="max-w-md md:float-right md:text-right leading-loose tracking-tight md:sticky md:top-0 ">
                        <p className="font-bold my-4 md:my-12">Previous Posts</p>
      {/*
                        <ul className="flex flex-wrap justify-between flex-col">
                            <li><a href="/" className="nav">posts links</a></li>
                            <li><a href="/" className="nav"></a></li>
                            <li><a href="/" className="nav"></a></li>
                            <li><a href="/" className="nav"></a></li>
                        </ul>
                        <a href="/" className="normal font-bold hover:font-bold">more...</a>
                        */}
                    </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2">
                    <div className="max-w-md leading-loose tracking-tight">
                        <h1 className="font-bold my-12">{posts[0]["Title"]}</h1>
      
                        <p className="mb-8"><ReactMarkdown children= {posts[0]["Content"]}  /> </p>

                    </div>
                </div>
                <div className="w-full md:w-1/2 md:pr-32 pt-12 md:pt-0 md:sticky md:bottom-0 order-4 md:order-3">
                    <div className="max-w-md md:float-right md:text-right leading-loose tracking-tight md:mb-16">
                        <p className="font-bold my-4 md:my-12">Contact Me</p>

                        <ul className="flex flex-wrap justify-between flex-row md:flex-col">
                            <li><a href="/" className="nav mx-2 md:mx-0">Twitter</a></li>
                            <li><a href="/" className="nav mx-2 md:mx-0">Instagram</a></li>
                            <li><a href="/" className="nav mx-2 md:mx-0">Dribbble</a></li>
                            <li><a href="/" className="nav mx-2 md:mx-0">etc</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 order-2 md:order-4">
                    <div className="max-w-md leading-loose tracking-tight">
                        <p className="font-bold my-4 md:my-12">Published By <br /> {posts[0]["PublishedBy"]}</p>
                        <hr/>
                        <p className="mb-8">Published On:<br/> {posts[0]["PublishedOn"]} </p>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 h-12 w-18 p-4">
                <button className="js-change-theme focus:outline-none">🌙</button>
            </div>
        </main>
        <Footer />
        </>
    );
}
