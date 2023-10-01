import React from "react";
import { useState } from "react";
import StarRating from "./stars";
import '../css/essay.css';
import axios from 'axios';

import strongAttributes from "../utils/strong-attributes";
import weakAttributes from "../utils/weak-attributes";
import {random_item} from "../utils/random";
import identity from "../utils/identity";
import commonPrompts from "../utils/common-prompts";
import wildcards from "../utils/wildcards";

export const Essay = () => {
  const [ essayData, setEssayData ] = useState('');
  const [ commonPrompt, setCommonPrompt ] = useState('');

  function getData() {
    const request = {
      strong_attribute: random_item(strongAttributes),
      weak_attribute: random_item(weakAttributes),
      identity: random_item(identity),
      wildcard: random_item(wildcards),
      common_prompt: random_item(commonPrompts)
    }

    setCommonPrompt(request.common_prompt);

    axios.post("/openai/get-response", request)
      .then((response) => {
        const gptResponse =response.data;
        setEssayData(gptResponse.data.content)
      }).catch((error) => {
      if (error.response) {
        console.log(error.response)
      }
    })
  }
  return (
    <div className="row">
      <div className="container">
        <div className="circle">
          <p>Module 1: Madlibs style essay generation</p>
        </div>
      </div>
      <button onClick={ getData }>wwwwww</button>
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
          <div className="top-header">
            <p>Student Description generated from left Common Essay Prompt: { commonPrompt.toUpperCase() }
            </p>
          </div>
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
                <p>{essayData.split('Weak Essay:')[0]}</p>
              </div>
              <StarRating />
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
                <p> { essayData.split('Weak Essay:')[1] ? "Weak Essay:" + essayData.split('Weak Essay:')[1] : ""}</p>
              </div>
              <StarRating />
            </div>
          </div>
          <div className="row platte">
            <div className="flex-container">
              <div className="platte-tomato"></div>
              <div className="platte-orange"></div>
              <div className="platte-orange"></div>
              <div className="platte-lightgreen"></div>
              <div className="platte-mediumseagreen"></div>
              <div className="platte-violet"></div>
            </div>
          </div>
          <div className="bottom-footer">
            <p>
              This will be a rapid fire example generator. There is an interactive component with the prompt buttons. The sudent will rate the good essays to see what kind of writing style they like - sort of like a buzzfeed quiz
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}