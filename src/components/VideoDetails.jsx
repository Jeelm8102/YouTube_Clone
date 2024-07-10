import React, { useContext, useEffect, useState } from 'react'
import ReactPlayer from "react-player/youtube"
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'

import { Context } from '../context/contextApi'
import SuggestionVideoCard from './SuggestionVideoCard'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../utils/api'

const VideoDetails = () => {

  const [video, setVideo] = useState()
  const [relatedVideos, setRelatedVideo] = useState()
  const { id } = useParams()
  const { setLoading } = useContext(Context)

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h")
    fetchVideoDetails()
    fetchRelatedVideos()
  }, [id])

  const fetchVideoDetails = () => {
    setLoading(true)
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      console.log("Video", res)
      setVideo(res)
      setLoading(false)
    })
  }
  const fetchRelatedVideos = () => {
    setLoading(true)
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log("Related", res)
      setRelatedVideo(res)
      setLoading(false)
    })
  }

  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] bg-black'>
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc100%-350px] xl:w-[calc100%-400px] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{backgroundColor: "#000000"}}
            />
          </div>

          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>

          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img className='h-full w-full object-cover' src={video?.author?.avatar[0]?.url} alt="" />
                </div>
              </div>

              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoDetails