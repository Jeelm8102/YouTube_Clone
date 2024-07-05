import React, { useContext, useEffect, useState } from 'react'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'

import {Context} from '../context/contextApi'
import SuggestionVideoCard from './SuggestionVideoCard'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../utils/api'

const VideoDetails = () => {

  const [video, setVideo] = useState()
  const [relatedVideos, setRelatedVideo] = useState()
  const {id} = useParams()
  const {setLoading} = useContext( Context )

  useEffect(()=>{
    document.getElementById("root").classList.add("custom-h")
    fetchVideoDetails()
    fetchRelatedVideos()
  },[id])

  const fetchVideoDetails =()=>{
    setLoading(true)
    fetchDataFromApi(`video/details/?id=${id}`).then((res)=>{
      console.log("Video",res)
      setVideo(res)
      setLoading(false)
    })
  }
  const fetchRelatedVideos =()=>{
    setLoading(true)
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res)=>{
      console.log("Related",res)
      setRelatedVideo(res)
      setLoading(false)
    })
  }

  return (
    <div>VideoDetails</div>
  )
}

export default VideoDetails