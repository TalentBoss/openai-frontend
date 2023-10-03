import React from "react";
import { useState } from "react";
import StarRating from "./stars";
import '../css/essay.css';
import axios from 'axios';

import strongAttributes from "../utils/strong-attributes";
import weakAttributes from "../utils/weak-attributes";
import { random_item } from "../utils/random";
import identity from "../utils/identity";
import commonPrompts from "../utils/common-prompts";
import wildcards from "../utils/wildcards";
import Dropdown from "./dropdown";
import EssayContent from "./essay-content";

const Essay = () => {
  const [ essayData, setEssayData ] = useState('');
  const [ commonPrompt, setCommonPrompt ] = useState('');

  function getData(selectedPrompt) {
    setEssayData('');
    console.log(selectedPrompt)
    setCommonPrompt(selectedPrompt)
    const request = {
      strong_attribute: random_item(strongAttributes),
      weak_attribute: random_item(weakAttributes),
      identity: random_item(identity),
      wildcard: random_item(wildcards),
      common_prompt: selectedPrompt
    }

    axios.post("/openai/get-response", request)
      .then((response) => {
        const gptResponse =response.data;
        setEssayData(gptResponse.data) //should changed as content
      }).catch((error) => {
      if (error.response) {
        console.log(error.response)
      }
    })
  }

  const dropdownProps = {
    options: commonPrompts,
    handleSelect: event => {
      if (event.target.value !== 'empty') {
        getData(event.target.value)
      }
    }
  }

  const essayContentHandle = currentIndex => {
    console.log("typeWriterHandle", currentIndex);

  }


  return (
    <div className="row">
      <div className="essay-left">
        <div className="row left-topics">
          <div className="row dot-series">
            <div className="left-topics-header-filled-dot"></div>
            <div className="left-topics-header-dot"></div>
            <div className="left-topics-header-dot"></div>
          </div>
          <div className="left-topics-header">

          </div>
          <div className="row left-topics-item">
            <div className="inner-topic">
              <p>ASPCA Volunteer</p>
            </div>
            <div className="inner-topic">
              <p>Juvenile Detention</p>
            </div>
            <div className="inner-topic">
              <p>ASPCA Volunteer</p>
            </div>
            <div className="inner-topic">
              <p>Juvenile Detention</p>
            </div>
            <div className="inner-topic">
              <p>ASPCA Volunteer</p>
            </div>
            <div className="inner-topic-generate">
              <p>Generate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="essay-right">
        <div className="row">
          <Dropdown {...dropdownProps}/>

          <div className="row main-content">
            <div className="strong-essay essay-dialog">
              <div className="row three-icons-bar">
                <div className="common-icon">
                  <div className="hidden-divider"></div>
                </div>
                <div className="common-icon">
                  <div className="zooming-divider"></div>
                </div>
                <div className="common-icon relative">
                  <div className="close-mark"></div>
                </div>
              </div>
              <div className="essay-dialog-divider">

              </div>
              <div className="essay-content">
                <EssayContent text={essayData.split('Weak Essay:')[0]} delay={10} handle={value => essayContentHandle(value)}/>
              </div>
              <StarRating essay={essayData}/>
            </div>
            <div className="weak-essay essay-dialog">
              <div className="row three-icons-bar">
                <div className="common-icon">
                  <div className="hidden-divider"></div>
                </div>
                <div className="common-icon">
                  <div className="zooming-divider"></div>
                </div>
                <div className="common-icon relative">
                  <div className="close-mark"></div>
                </div>
              </div>
              <div className="essay-dialog-divider">

              </div>
              <div className="essay-content">
                <EssayContent text={ essayData.split('Weak Essay:')[1] ? "Weak Essay:" + essayData.split('Weak Essay:')[1] : ""} delay={10} handle={value => essayContentHandle(value)} />
              </div>

            </div>
          </div>
          <div className="row platte">
            <div className="flex-container">
              <div className="platte-item platte-tomato"></div>
              <div className="platte-item platte-orange"></div>
              <div className="platte-item platte-lightgreen"></div>
              <div className="platte-item platte-mediumseagreen"></div>
              <div className="platte-item platte-violet"></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Essay