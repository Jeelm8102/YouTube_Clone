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
    fetchVideoDetails()
  },[id])

  const fetchVideoDetails =()=>{
    setLoading(true)
    fetchDataFromApi(`video/details/?id=${id}`).then((res)=>{
      console.log(res)
      setVideo(res)
      setLoading(false)
    })
  }

  return (
    <div>VideoDetails</div>
  )
}

export default VideoDetails