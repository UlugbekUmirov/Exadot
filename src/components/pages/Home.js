import styled from "styled-components";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AccardionBody from "../../AccardionBody";
const Homee = styled.div`
  .section_1 {
    display: flex;
    align-items: center;
  }
  .sd {
    background-color: #f1f9ff;
  }
  .section_1 button {
    padding: 20px 30px;
    border: none;
    border-radius: 14px;
    background-color: #4c5efe;
    color: white;
    font-weight: 500;
    font-size: 24px;
  }
  .section_1 h1 {
    font-weight: 700;
    font-size: 48px;
    color: #2a2941;
    width: 90%;
  }
  .section_1 img {
    margin-right: 84px;
  }
  .section_1 p {
    font-weight: 500;
    font-size: 20px;
    margin: 16px 0px 40px 0px;
    color: #2a2941;
    width: 90%;
  }
  .section_1 {
    padding: 43px 0px 72px 0px;
  }
  .hr {
    padding: 36px 0px 70px;
    display: flex;
    justify-content: space-between;
  }
  .hr p {
    font-weight: 400;
    font-size: 16px;
    color: #6e6d77;
    line-height: 150%;
  }
  .number {
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
    color: #2a2941;
  }
  .section_2 {
    display: flex;
    align-items: end;
    padding: 100px 0px 50px 0px;
  }
  .section_2 h2 {
    font-weight: 700;
    font-size: 48px;
    color: #2a2941;
  }
  .section_2 p {
    font-weight: 400;
    font-size: 20px;
    color: #6e6d77;
    line-height: 165%;
    width: 85%;
    margin: 0;
  }
  .section_2 img {
    margin-right: 100px;
  }
  .section_3 {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  .section-item img {
    align-items: center;
  }
  .section-item h4 {
    font-weight: 600;
    font-size: 20px;
    color: #2a2941;
    line-height: 135%;
    margin: 8px 0px 19px 0;
  }
  .section-item p {
    font-weight: 400;
    font-size: 16px;
    color: #6e6d77;
  }
  .section3Button {
    text-align: center;
    padding: 50px 0px 78px 0px;
  }
  .section3Button button {
    padding: 20px 30px;
    color: white;
    background: #4c5efe;
    border-radius: 14px;
    text-align: center;
    border: none;
    max-height: 69px;
    font-weight: 500;
    font-size: 24px;
  }
  .section_4 {
    padding: 80px 0px;
    display: flex;
    align-items: center;
    color: white;
  }
  .section_4 p {
    font-weight: 400;
    font-size: 18px;

    line-height: 165%;
  }
  .section_4 h2 {
    font-weight: 700;
    font-size: 48px;
  }
  .section_4 h4 {
    margin: 24px 0px 16px 0px;
    font-weight: 500;
    font-size: 24px;
    line-height: 165%;
  }
  .section_4 p {
    font-weight: 400;
    font-size: 18px;
  }
  .section_4-item {
    display: flex;
    align-items: start;
  }
  .section-item p {
    margin: 0;
    margin-bottom: 24px;
  }
  .section-item p:nth-child(4) {
    margin-bottom: 0px !important;
  }
  .section_4-item img {
    margin-right: 8px;
    margin-top: 5px;
  }
  .section_5 {
    padding: 100px 0px;
  }
  .section_5 h2 {
    font-weight: 700;
    font-size: 48px;
    color: #2a2941;
    text-align: center;
    margin-bottom: 12px;
  }
  .accordion-button {
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    color: #2a2941;
    padding: 24px 0px 24px 0px;
  }
  .accordion-button:not(.collapsed)::after {
    background-image: url("/accardion icons-.svg");
  }

  .accordion-button::after {
    background-image: url("/accardion icons+.svg");
  }
  .accordion-item .accordion-header .accordion-button::after {
    width: 1.5rem;
    height: 1.7rem;
    margin-left: auto;
  }
  .accordion-button2 {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    background-color: #fff;
    border-radius: 0;
    overflow-anchor: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      border-radius 0.15s ease;
  }
  .section_5-accardion {
    padding-left: 97px;
    padding-right: 97px;
  }
  .section_6 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
  }
  .section_6 p {
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    width: 90%;
  }
  .section_6 h5 {
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
  }
  .mentor_span {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    width: 355px;
  }
  .section_7 {
    text-align: center;
    padding-bottom: 100px;
  }
  .section_7 h2 {
    color: #2a2941;
  }

  .section7-item h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 135%;
    color: #2a2941;
  }
  .section7-item p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #6e6d77;
  }
  & .thought {
    background-color: white;
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 60px;
    border: 1px solid #e9e9eb;
  }
  .thought p {
    font-weight: 400;
    font-size: 16px;
    color: #6e6d77;
  }
  .swiper {
    margin-bottom: 100px;
  }
  & .slider-title {
    margin: 0;
  }
  & .swiper-pagination-bullet-active {
    background-color: #2a2941 !important;
  }

  & .export-profile {
    display: flex;
    align-items: center;
  }
  & .export-profile Image {
    margin-right: 16px;
    margin-bottom: 16px;
  }
  & .export-profile span {
    color: #6f818f;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
  }
  .export-profile h5 {
    font-weight: 400;
    font-size: 20px;
  }
  .export-profile img {
    margin-right: 17px;
  }
  .section_10 {
    padding: 100px 0px;
    display: flex;
    align-items: center;
  }
  & .section_9 .container {
    position: relative;
  }
  .s9img {
    position: absolute;
    top: 37%;
    left: -0.5%;
  }
  .section_9 .container .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    align-items: center;
  }
  .section_9 .container .item h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 150%;
  }
  .section_9 h2 {
    position: relative;
    z-index: 9999999;
  }
  .s9button {
    border: none;
    padding: 20px 30px;
    border-radius: 14px;
    font-weight: 500;
    font-size: 24px;
    color: white;
    background: #4c5efe;
  }
  .section_10 h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    color: #2a2941;
  }
  .section_10 img {
    margin-right: 8px;
  }
  .s10-item {
    margin-bottom: 16px;
    display: flex;
  }
  .section_11 {
    padding: 80px 0px;
    margin-bottom: 100px;
    text-align: center;
    position: relative;
  }
  .kurs1 {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .kurs2 {
    position: absolute;
    top: 0;
    right: 0;
  }
  .kurs3 {
    position: absolute;
    top: 48%;
    left: 53.3%;
    z-index: 0;
  }
  .buttons11 {
    background: #4c5efe;
    border-radius: 14px;
    align-items: center;
    padding: 20px 30px;
    text-align: center;
    border: none;
    color: white;
    font-weight: 500;
    font-size: 24px;
  }
  .section_11 h2 {
    text-align: center;
    align-items: center;
    font-size: 48px;
    line-height: 150%;
    font-weight: 700;
    color: white;
    margin-bottom: 36px;
    position: relative;
    z-index: 999 !important;
    margin-left: 270px;
    width: 50%;
    display: flex;
    font-size: 48px;
  }
  .buttons11 {
    position: relative;
    z-index: 9999;
  }
  .section_12 {
    margin-bottom: 100px;
  }
  .section_12-items {
    display: flex;
  }
  .section_12-right {
    border-top: 12px solid #4c5efe;
    display: flex;
    padding: 24px 36px 36px 36px;
    box-shadow: 4px 8px 45px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    margin-right: 24px;
  }
  .section_12-right p {
    margin-top: 16px;
  }
  .s10-item {
    margin-top: 16px;
  }
  .section_12 h2 {
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 50px;
    color: #2a2941;
  }
  .section_12 h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    margin: 0px;
    color: #2a2941;
  }
  .s10-item span {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #2a2941;
  }
  .section_12-left {
    border-top: 12px solid #f197a1;
    padding: 24px 32px 64px 24px;
    box-shadow: 4px 8px 45px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
  }
  .section_12-right .right {
    padding-right: 32px;
    border-right: 1px solid #e9e9eb;
  }
  .section_12-right .left {
    margin-left: 32px;
  }
  .s10-item img {
    margin-right: 8px;
  }
  .section_13 {
    margin-bottom: 100px;
  }
  .section_13-accordion {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .section_13-title {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    margin-bottom: 50px;
    text-align: center;
    color: #2a2941;
  }
  .section_14 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
  }
  .section_14 h2 {
    font-weight: 700;
    font-size: 44px;
    line-height: 140%;
    width: 90%;
    color: #2a2941;
  }

  form {
    max-width: 461px;
  }
  input::placeholder,
  textarea::placeholder {
    font-weight: 450;
    font-size: 20px;
    line-height: 25px;
  }
  .feedback-input {
    border-radius: 14px;
    background-color: transparent;
    border: 1px solid #e9e9eb;
    transition: all 0.3s ease;
    padding: 17px 27px;
    margin-bottom: 16px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
    font-weight: 450;
    font-size: 20px;
    resize: none;
    color: #2a2941;
  }
  textarea {
    height: 180px !important;
  }
  .feedback-input:focus {
    border: 2px solid #5762f7;
  }
  textarea {
    height: 150px;
    line-height: 150%;
    resize: vertical;
  }

  .yuborish {
    background: #4c5efe;
    border-radius: 14px;
    border: 0;
    cursor: pointer;
    color: white;
    font-size: 24px;
    padding: 20px 166px;
    line-height: 19px;
    transition: all 0.3s ease;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 18px 24px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
  }
  .form-check {
    margin: 8px 0px 24px 0px;
  }
  .form-check label {
    color: #2a2941;
  }
  .contact {
    margin-bottom: 24px;
  }
  .contact img {
    margin-right: 16px;
  }
  .contact span,
  .contact a {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #2a2941;
  }
  .number {
    font-family: "Spoff";
  }
  .accordion {
    border: 1px solid white;
    border: none !important;
    border-radius: 16px !important;
  }
  .accordion-item .accordion-header .accordion-button {
    border-radius: 16px;
    border-top: 1px solid #e9e9eb;
  }
  .accordion-button {
    border-top: 1px solid #e9e9eb;
    font-weight: 500;
  }
  .accordion-button1 {
    border-top: 1px solid white;
    font-weight: 500;
  }
  .accordion-button:focus {
    box-shadow: none;
  }
  .section_13 .accordion-button {
    padding: 24px 40px !important;
    margin-right: 49px;
    color: #2a2941;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
  }

  .section_13 .accordion-body {
    border-bottom: 1px solid #e9e9eb;
    padding: 0px 40px 24px 40px;
    text-align: left;
  }
  .section_13 .accordion-body ul {
    padding: 0;
    padding-left: 15px;
    margin: 0;
    color: #6e6d77;
  }
  .itemmm {
    display: flex;
  }
  .itemmm h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 150%;
  }
  .s14_contact {
    position: relative;
  }
  .s14_contact-vector {
    position: absolute;
    bottom: 100%;
    right: 5%;
  }
  .form-check input {
    width: 24px;
    height: 24px;
  }
  .form-check label {
    margin-top: 2px;
    margin-left: 10px;
  }
  .accordion h2 {
    border-bottom: 1px solid #e9e9eb !important;
    margin: 0;
  }
  .accordion-button:not(.collapsed) {
    background-color: white !important;
    color: #2a2941;
  }
  .accardion__one-p {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #6e6d77;
  }
  .accardiontwo-item {
    border: 1px solid #e9e9eb !important;
    border-radius: 16px !important;
    margin-bottom: 16px !important;
  }
  .accordion-item {
    max-width: 752px;
  }
  .accordion-body {
    border-bottom: 1px solid white;
  }

  .section_5-accardion .accordion-body {
    padding: 0px 0px 24px 0px;
  }
  .accordion-item .accordion h2 {
    border-bottom: 1px solid #e9e9eb !important;
  }
  .accordion h2 {
    border-bottom: none !important;
  }
  .accordion-button {
    border-bottom-left-radius: none !important;
    border-bottom-right-radius: none !important;
  }
  .section_12-right button {
    padding: 20px 30px;
    font-weight: 500;
    font-size: 24px;
  }

  @media (max-width: 1300px) {
    .s9img {
      position: absolute;
      top: 36%;
      left: -0.5%;
    }
  }

  @media (max-width: 1145px) {
    .kurs3 {
      top: 48%;
      left: 55%;
    }
  }
  @media (max-width: 1100px) {
    .section_1 h1 {
      font-size: 40px;
    }

    .section_1 {
      padding: 0px 20px;
    }
    .section_2 img {
      margin: 0;
    }
    .section_4 {
      display: block;
    }
    .section_6 {
      padding: 20px;
    }
    .section_6 img {
      text-align: center;
      display: flex;
      width: 70%;
    }
    .section_6 p {
      font-size: 20px;
      width: 100%;
    }
    .section_6 {
      padding-bottom: 30px;
    }
    .section_10 {
      display: block;
    }
    .girl {
      width: 100%;
    }
    .section_12-items {
      display: block;
    }
    .section_12-left {
      margin-top: 20px;
    }
    .section_12-right {
      margin: 0;
    }

    .section_11 h2 {
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 1022px) {
    .s9img {
      position: absolute;
      top: 28%;
      left: -0.5%;
    }
  }
  @media (max-width: 1000px) {
    .section_1 {
      display: block;
      padding: 40px;
    }
    .section_2 {
      display: block;
      padding: 20px;
    }
    .section_2 img {
      margin-top: 20px;
      width: 60%;
      margin-bottom: 60px;
    }
    .section_1 img {
      margin-right: 0;
      margin-top: 20px;
    }
    .section_1 h1 {
      font-size: 48px;
      width: 90%;
    }
    .itemmm {
      display: block;
      margin-bottom: 10px;
    }

    .section_14 {
      display: block;
      padding: 0px 0px 0px 170px;
    }
    .section_11 {
      padding: 80px;
    }
    .section_11 h2 {
      text-align: center;
      margin-left: 0;
      width: 100%;
    }
    .s14_contact-vector {
      display: none;
    }
    .kurs3 {
      top: 35%;
      left: 750px;
    }
    .s9img {
      position: absolute;
      top: 10%;
      left: 61%;
    }
  }

  @media (max-width: 890px) {
    .s9img {
      top: 8%;
      left: 66%;
    }
  }
  @media (max-width: 921px) {
    .s9img {
      top: 8%;
      left: 70%;
    }
  }
  @media (max-width: 976px) {
    .kurs3 {
      top: 47%;
      left: 44%;
    }
  }
  @media (max-width: 990px) {
    .number-item {
      padding-left: 30px;
    }
    .section_2 p {
      width: 100%;
      margin: 0;
    }
    .section_5-accardion {
      padding-left: 20px;
      padding-right: 20px;
    }
    .section_6 {
      display: block;
      padding: 20px;
    }
    .section_6 img {
      text-align: center;
      display: flex;
      width: 100%;
      padding: 0px 70px;
    }
  }
  @media (max-width: 828px) {
    .s9img {
      top: 19%;
      left: 0%;
    }
  }
  @media (max-width: 852px) {
    .kurs3 {
      top: 47%;
      left: 56%;
    }
  }
  @media (max-width: 830px) {
    .section_14 {
      padding: 0px 0px 0px 100px;
    }
  }
  @media (max-width: 768px) {
    .number-item {
      padding-left: 30px;
    }
    .section_1 {
      padding: 40px 10px 10px;
    }
    .section_1 h1 {
      font-size: 40px;
      width: 100%;
    }
    .section_1 p {
      width: 100%;
    }
    .section_1 button {
      padding: 15px;
      font-size: 18px;
    }
    .section_2 p {
      width: 100%;
      font-size: 17px;
    }
    .section_2 h2 {
      width: 100%;
      font-size: 40px;
    }

    .s14_img {
      width: 100%;
    }

    .section_12-right {
      display: block;
    }
    .section_12-right .left {
      margin: 0;
      margin-top: 15px;
    }
    .section_12-right .right {
      border-right: 1px solid white;
      padding: 0;
    }
  }
  @media (max-width: 700px) {
    .section_2 img {
      width: 100%;
      padding: 0 40px 0px 40px;
    }
    .section_14 {
      padding: 10px;
    }
    form {
      margin: 0 auto;
    }
    .section_14 h2 {
      font-size: 30px;
    }
    .contact a,
    .contact span {
      font-size: 17px;
    }
    .accordion-button {
      font-size: 20px;
      color: #2a2941;
    }
    .section_6 {
      display: block;
      padding: 20px;
    }
    .section_6 img {
      text-align: center;
      display: flex;
      width: 100%;
      padding: 0;
    }
  }
  @media (max-width: 645px) {
    .kurs3 {
      top: 47%;
      left: 61%;
    }
  }
  @media (max-width: 634px) {
    .s9img {
      top: 17%;
      left: 0%;
    }
  }
  @media (max-width: 601px) {
    .s9img {
      top: 17%;
      left: 33%;
    }
  }
  @media (max-width: 606px) {
    .kurs3 {
      top: 54%;
    }
  }
  @media (max-width: 576px) {
    .footer_container {
      padding-right: 10px;
      padding-left: 10px;
    }
    .number-item {
      text-align: center;
    }

    .section_2 p {
      font-size: 15px;
    }
    .section_4 p {
      font-size: 17px;
    }
    .section_4 h2 {
      font-size: 44px;
      width: 100%;
    }
    .section_6 p {
      font-size: 16px;
    }
    .s19_logo {
      text-align: center;
    }
    .section_10 h2 {
      font-size: 20px;
    }
    .itemmm h2 {
      font-weight: 700;
      font-size: 35px;
      line-height: 150%;
    }
    .section_11 {
      padding: 15px;
    }
    .section_11 h2 {
      margin: 30px 0;
    }
    .section_11 button {
      font-size: 20px;
      margin-bottom: 20px;
    }
    .section_12-right button {
      padding: 15px;
      font-weight: 500;
      font-size: 18px;
      width: 100%;
    }
    .kurs2 {
      display: none;
    }
    .section_11 h2 {
      font-size: 30px;
    }
    .s9button {
      font-size: 20px;
      padding: 15px;
    }
    .section_11 button {
      padding: 10px 20px;
    }
    .section_1 button {
      width: 100%;
    }
    .kurs3 {
      top: 32%;
      left: 76%;
    }
    .s9img {
      top: 12%;
      left: 0%;
    }
  }

  @media (max-width: 558px) {
    .kurs3 {
      top: 45%;
      left: 38%;
    }
  }
  @media (max-width: 500px) {
    .section_1 img {
      width: 85%;
    }
    .section_2 img {
      width: 100%;
      padding: 0;
    }
    .accordion-button {
      font-size: 18px;
      color: #2a2941;
    }
    .itemmm button {
      width: 100%;
    }
  }
  @media (max-width: 480px) {
    .kurs3 {
      top: 45%;
      left: 50%;
    }
  }
  @media (max-width: 451px) {
    .section_1 img {
      width: 100%;
    }
    .s9img {
      top: 12%;
      left: 30%;
    }
  }
  @media (max-width: 440px) {
    .s9img {
      top: 7%;
      left: 30%;
    }
  }

  @media (max-width: 340px) {
    .kurs3 {
      opacity: 0;
    }
    .s9img {
      opacity: 0;
    }
  }
`;
export default function Home() {
  return (
    <Homee>
      <div className="content ">
        <div className="sd">
          <div className="container ">
            <div className="section_1">
              <div>
                <h1>Курс SEO специалист от Exadot Academy</h1>
                <p>
                  курс по продвижению бизнеса в интернете. Научитесь
                  раскручивать сайты в поисковых системах самостоятельно.
                </p>
                <a
                  href="#contact
                "
                >
                  <button>Получить консультацию</button>
                </a>
              </div>

              <img src="/header img.svg" alt="" />
            </div>
          </div>
          <div>
            <div className="container">
              <hr />
            </div>
          </div>
          <div className="container">
            <div className="hr row">
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 number-item ">
                <div className="number">24.10</div>
                <p>начало курса</p>
              </div>
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 number-item">
                <div className="number">17+</div>
                <p>практических занятий</p>
              </div>
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 number-item">
                <div className="number">12</div>
                <p>домашних заданий</p>
              </div>
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 number-item">
                <div className="number">10+</div>
                <p>практикующих экспертов</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section_2">
            <div>
              <h2>Кому подойдет курс?</h2>
              <p>
                Хотите привлекать посетителей на свои или партнерские
                интернет-проекты? Тогда вам нужно освоить технологии
                SEO-продвижения страниц в Google и Яндексе. SEO-маркетолог – это
                специалист, который выводит сайты в поисковой выдаче на высокие
                позиции. Это позволяет обеспечить трафик пользователей на
                проекты всех типов: интернет-магазины, корпоративные сайты,
                личные блоги, развлекательные проекты.
              </p>
            </div>
            <div>
              <img src="/heir.png" alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section_3 row">
            <div className="section-item col-12 col-lg-3 col-md-4 col-sm-6">
              <img src="Frame 427321001.svg" alt="" />
              <h4>Новичкам для освоения новой профессии</h4>
              <p>
                Освоите крутую профессию с нуля и сможете устроиться в агентство
                или брать заказы на фрилансе.
              </p>
            </div>
            <div className="section-item col-12 col-lg-3 col-md-4 col-sm-6">
              <img src="/Frame 427321000.svg" alt="" />
              <h4>Маркетологам для понимания деталей</h4>
              <p>
                Поймёте, как собирать семантическое ядро, проводить аудит сайтов
                и поднимать их в поиске. Узнаете, как ставить задачи
                SEO-оптимизаторам и копирайтерам.
              </p>
            </div>
            <div className="section-item col-12 col-lg-3 col-md-4 col-sm-6">
              <img src="/icons.svg" alt="" />
              <h4>Владельцам для создания новых каналов</h4>
              <p>
                Который хотят создать новые каналы продаж. Сможете привлекать
                бесплатный трафик на сайт и больше зарабатывать.
              </p>
            </div>
            <div className="section-item col-12 col-lg-3 col-md-4 col-sm-6">
              <img src="/icons (1).svg" alt="" />
              <h4>Владельцам своих интернет-проектов</h4>
              <p>
                Собственных интернет-проектов, для их раскрутки. Привлечете
                трафик на сайт и сможете продавать больше, чем конкуренты.
              </p>
            </div>
          </div>
          <div className="section3Button">
            <button>Узнать больше</button>
          </div>
        </div>
        <div className="" style={{ background: "#2A2941" }}>
          <div className="container">
            <div className="section_4">
              <div>
                <h2>Чему вы научитесь?</h2>
                <h4>Добавьте навыки в резюме:</h4>
                <div className="section_4-item">
                  <img src="section_5 icon.svg" alt="" />
                  <p>
                    Проводить оптимизацию сайта. Готовить проекты, которые будут
                    соответствовать рекомендациям поисковых систем. Мы расскажем
                    о внешней и внутренней оптимизации ресурсов.
                  </p>
                </div>
                <div className="section_4-item">
                  <img src="section_5 icon.svg" alt="" />
                  <p>
                    Выполнять технический аудит. Любые ошибки программной части
                    и сбои в работе сайта приводят к понижению в выдаче. Научим
                    искать и исправлять ошибки интернет-проектов.
                  </p>
                </div>
                <div className="section_4-item">
                  <img src="section_5 icon.svg" alt="" />
                  <p>
                    Анализировать трафик. Поможем правильно привлекать и
                    удерживать пользователей на сайте. Предоставим знания,
                    помогающие повышать конверсию на страницах и увеличивать
                    узнаваемость бренда.
                  </p>
                </div>
                <div className="section_4-item">
                  <img src="section_5 icon.svg" alt="" />
                  <p>
                    Взаимодействовать со специалистами. Расскажем, как
                    привлекать в команду дизайнеров, программистов, копирайтеров
                    и других специалистов, навыки которых необходимы при
                    продвижении сайта.
                  </p>
                </div>
              </div>
              <div>
                <img className="s14_img" src="/s5img4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section_5">
            <h2>Чему вы научитесь?</h2>
            <div className="section_5-accardion">
              <div>
                <div className="accordion">
                  <div>
                    <h2 id="headingOne ">
                      <button
                        className="accordion-button collapsed accordion-button1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Business Development. Проводим аудит ваших процессов
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="heading2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Strategy. От места бизнеса на рынке к KPI команды
                        (пред-записанная лекция)
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Marketing. Начинаем строить воронку лидогенерации
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Business Development. Проводим аудит ваших процессов
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Brand. Создаем ваше уникальное предложение{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Digital Marketing. SMM и Content{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        Sales. Lead Generation. Готовимся к первой кампании{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="headingNine">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                      >
                        Sales. Funnels. Строим и анализируем, где теряются лиды{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseNine"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="headingTen">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                      >
                        Sales. Lead Generation. Upwork{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseTen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="heading12">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse12"
                        aria-expanded="false"
                        aria-controls="collapse12"
                      >
                        Sales. Преодолеваем психологические барьеры.
                      </button>
                    </h2>
                    <div
                      id="collapse12"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="heading13">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse13"
                        aria-expanded="false"
                        aria-controls="collapse13"
                      >
                        Sales. Partnership Management. Налаживаем отношения{" "}
                      </button>
                    </h2>
                    <div
                      id="collapse13"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="heading14">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse14"
                        aria-expanded="false"
                        aria-controls="collapse14"
                      >
                        Sales. KPIs. Измеряем ваш результат{" "}
                      </button>
                    </h2>
                    <div
                      id="collapse14"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="heading15">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse15"
                        aria-expanded="false"
                        aria-controls="collapse15"
                      >
                        Email Marketing. Строим рассылки (пред-записанная
                        лекция){" "}
                      </button>
                    </h2>
                    <div
                      id="collapse15"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="heading16">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse16"
                        aria-expanded="false"
                        aria-controls="collapse16"
                      >
                        Custom Emails. Заставляем открывать ваши письма
                      </button>
                    </h2>
                    <div
                      id="collapse16"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="heading17">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse17"
                        aria-expanded="false"
                        aria-controls="collapse17"
                      >
                        Account-based Selling. Внедряем в вашу компанию
                      </button>
                    </h2>
                    <div
                      id="collapse17"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="heading18">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse18"
                        aria-expanded="false"
                        aria-controls="collapse18"
                      >
                        Account and Customer Success Management. Развиваем
                        отношения с клиентами
                      </button>
                    </h2>
                    <div
                      id="collapse18"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="heading19">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse19"
                        aria-expanded="false"
                        aria-controls="collapse19"
                      >
                        Sales Department. Строим отдел{" "}
                      </button>
                    </h2>
                    <div
                      id="collapse19"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="heading20">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse20"
                        aria-expanded="false"
                        aria-controls="collapse20"
                      >
                        Monetization. Выставляем стоимость (пред-записанная
                        лекция)
                      </button>
                    </h2>
                    <div
                      id="collapse20"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                  <div>
                    <h2 id="heading21">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse21"
                        aria-expanded="false"
                        aria-controls="collapse21"
                      >
                        Итоговый экзамен{" "}
                      </button>
                    </h2>
                    <div
                      id="collapse21"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <AccardionBody />
                    </div>
                  </div>
                </div>
                <div className="section3Button">
                  <button>Узнать больше</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="section_6"
            style={{ background: " #2A2941", borderRadius: "24px" }}
          >
            <img src="/section_6.svg" alt="" />

            <div>
              <p style={{ color: "white" }}>
                Обладаю большим опытом продвижения сайтов в поисковых системах
                Яндекс и Google. Поделюсь своим опытом и наработками,
                позволяющими добиться высоких результатов с собственными сайтами
                и клиентскими проектами. Предоставлю несколько уникальных
                кейсов, на примере которых будет показана работа SEO-специалиста
              </p>
              <h5 style={{ color: "white" }}>Фаррух Курбанов</h5>
              <span className="mentor_span" style={{ color: "#F197A1" }}>
                {` Ментор и SEO-специалист с более \n чем 10-летним опытом`}
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section_7">
            <h2
              style={{
                textAlign: "center",
                marginBottom: "50px",
                fontWeight: "700",
                fontSize: "48px",
              }}
            >
              Что вы получите?
            </h2>
            <div className="row">
              <div className="col-12  col-md-6 col-lg-4 section7-item">
                <img src="/s7_1.svg" alt="" />
                <h4>Инструменты раскрутки</h4>
                <p>
                  Предоставим информацию о наиболее полезных программах и
                  сервисах, которые нужны оптимизаторам для раскрутки сайтов.
                </p>
              </div>
              <div className="col-12  col-md-6 col-lg-4 section7-item">
                <img src="/s7_2.svg" alt="" />
                <h4>Чеклист SEO-работ</h4>
                <p>
                  Предоставим список заданий, выполнив которые можно добиться
                  роста проекта в выдаче поисковых систем.
                </p>
              </div>
              <div className="col-12  col-md-6 col-lg-4 section7-item">
                <img src="/s7_3.svg" alt="" />
                <h4>Большой объем файлов</h4>
                <p>
                  Пользователи получают максимально полезный контент, к которому
                  можно будет обращаться в любое удобное время.
                </p>
              </div>

              <div className="col-12  col-md-6 col-lg-4 section7-item ">
                <img src="/s7_4.svg" alt="" />
                <h4>Расшифровки метрик</h4>
                <p style={{ color: "#6E6D77" }}>
                  Научим пользоваться данными и графиками, получаемыми из
                  аккаунтов в поисковых системах. Это повысить эффективность
                  рабочего процесса.
                </p>
              </div>
              <div className="col-12  col-md-6 col-lg-4 section7-item">
                <img src="/s7_5.svg" alt="" width={80} height={81} />
                <h4>Полезные знакомства</h4>
                <p>
                  Мы не просто учим наших студентов, а создаем закрытое
                  сообщество, где каждый может делиться своими кейсами и изучать
                  чужой опыт.
                </p>
              </div>
              <div className="col-12  col-md-6 col-lg-4 section7-item">
                <img src="/s7_6.svg" alt="" />
                <h4>Много практики.</h4>
                <p>
                  Для закрепления полученных теоретических знаний предоставляем
                  большое количество практической работы. Которая позволит
                  студентам понять SEO изнутри.
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="container">
          <h4
            style={{
              textAlign: "center",
              marginBottom: "50px",
              fontWeight: "700",
              color: " #2A2941",
              fontSize: "48px",
            }}
          >
            Отзывы студентов
          </h4>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={false}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper slider"
          >
            <SwiperSlide className="slider-one">
              <div className="thought">
                <p className="">
                  “Давно искал достойный заработок. Несколько раз создавал свои
                  сайты, но не мог добиться от них необходимого результата и
                  бросал. Как-то увидел рекламу курса SEO-эксперта от академии
                  «Exadot». Решил записаться и не прогадал. Уже во время
                  обучения создал новый проект и стал раскручивать, получая
                  необходимые знания. Результатом очень доволен.”
                </p>
                <div className="export-profile">
                  {/*  <Image src="/Rectangle 50.svg" width={60} height={60} /> */}
                  <img src="slider1.svg" alt="" />
                  <div>
                    <h5 className="slider-title">Сергей Мастерной</h5>
                    <span>SEO</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider-one">
              <div className="thought">
                <p className="">
                  “Занимаюсь изготовлением корпусной мебели. Даю объявления на
                  Авито и веду группу ВКонтакте. Но, захотелось сделать еще один
                  канал получения клиентов, создал сайт. Все делал сам, поэтому
                  без ошибок не обошлось. Я это понял, когда стал учиться у
                  Фарруха. После исправления ошибок и использования полученных
                  знаний, сайт стал хорошо ранжироваться по некоторым запросам.
                  Клиентов стало ощутимо больше, чем раньше.”
                </p>
                <div className="export-profile">
                  <img src="slider2.svg" alt="" />
                  <div>
                    <h5 className="slider-title">Виктор Тимашев</h5>
                    <span>SEO</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider-one">
              <div className="thought">
                <p className="">
                  “С мужем открыли небольшой интернет-магазин. Но трафик
                  получали только с директа. Решили попробовать в SEO. Поискали
                  хороший курс и нашли академию «Exadot». Прошла обучения и
                  теперь не только помогаю мужу продвигать магазин, но еще взяла
                  два проекта у знакомых. Результаты продвижения уже есть.”
                </p>
                <div className="export-profile">
                  <img src="slider3.svg" alt="" />
                  <div>
                    <h5 className="slider-title">Ксения Ерастова</h5>
                    <span>SEO</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider-one">
              <div className="thought">
                <p className="">
                  “Занимаюсь изготовлением корпусной мебели. Даю объявления на
                  Авито и веду группу ВКонтакте. Но, захотелось сделать еще один
                  канал получения клиентов, создал сайт. Все делал сам, поэтому
                  без ошибок не обошлось. Я это понял, когда стал учиться у
                  Фарруха. После исправления ошибок и использования полученных
                  знаний, сайт стал хорошо ранжироваться по некоторым запросам.
                  Клиентов стало ощутимо больше, чем раньше.”
                </p>
                <div className="export-profile">
                  <img src="slider1.svg" alt="" />
                  <div>
                    <h5 className="slider-title">Виктор Тимашев</h5>
                    <span>SEO</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider-one">
              <div className="thought">
                <p className="">
                  “С мужем открыли небольшой интернет-магазин. Но трафик
                  получали только с директа. Решили попробовать в SEO. Поискали
                  хороший курс и нашли академию «Exadot». Прошла обучения и
                  теперь не только помогаю мужу продвигать магазин, но еще взяла
                  два проекта у знакомых. Результаты продвижения уже есть.”
                </p>
                <div className="export-profile">
                  <img src="slider2.svg" alt="" />
                  <div>
                    <h5 className="slider-title">Ксения Ерастова</h5>
                    <span>SEO</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className="section_9"
          style={{ background: "#2A2941", padding: "80px 0px" }}
        >
          <div className="container">
            <img src="/s9img.svg" className="s9img" alt="" />
            <div className="itemmm">
              <h2 style={{ color: "white" }}>
                Наши студенты начали работать тут
              </h2>
              <div>
                <p style={{ color: "#6E6D77" }}>
                  В своём стремлении улучшить пользовательский опыт мы упускаем
                </p>
                <button className="s9button">Узнать больше</button>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col s19_logo ">
                  <img src="/Frame 427320401.svg" alt="" />
                </div>
                <div className="col s19_logo ">
                  <img src="/Frame 427320436.svg" alt="" />
                </div>
                <div className="col s19_logo">
                  <img src="/Frame 427320437.svg" alt="" />
                </div>
                <div className="col s19_logo">
                  <img src="/Frame 427320438.svg" alt="" />
                </div>
                <div className="col s19_logo">
                  <img src="/Frame 427320444.svg" alt="" />
                </div>
                <div className="col s19_logo">
                  <img src="/Frame 427320449.svg" alt="" />
                </div>
                <div className="col s19_logo">
                  <img src="/Frame 427320446.svg" alt="" />
                </div>
                <div className="col s19_logo">
                  <img src="/Frame 427320447.svg" alt="" />
                </div>
                <div className="col s19_logo">
                  <img src="/Frame 427320445.svg" alt="" />
                </div>
                <div className="col s19_logo">
                  <img src="/Frame 427320448.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section_10">
            <div>
              <h2>
                Наши студенты могут пройти практику в крупных IT-компаниях и
                digital-агентствах. При хороших результатах работы это позволяет
                трудоустроиться в дальнейшем. Также, поможем:
              </h2>
              <div className="s10-item">
                <img src="/galochka yashil.svg" alt="" />
                <span>
                  Составить резюме, которое заинтересует потенциального
                  работодателя.
                </span>
              </div>
              <div className="s10-item">
                <img src="/galochka yashil.svg" alt="" />
                <span>
                  Написать сопроводительное письмо с необходимой информацией.
                </span>
              </div>
              <div className="s10-item">
                <img src="/galochka yashil.svg" alt="" />
                <span>
                  Пройти стандартные тестовые задания и подготовиться к
                  собеседованию.
                </span>
              </div>
              <div className="s10-item">
                <img src="/galochka yashil.svg" alt="" />
                <span>
                  Получить консультации о том, как дальше развивать карьеру в
                  SEO.
                </span>
              </div>
            </div>
            <div className="s10-item">
              <img className="girl" src="girl.png" alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="section_11"
            style={{ background: "#2A2941", borderRadius: "24px" }}
            id="course"
          >
            <h2
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              Оставьте заявку и начните курс
            </h2>
            <button className="buttons11">Оставить заявку</button>
            <img className="kurs1" src="/kurs1img.svg" alt="" />
            <img className="kurs2" src="/kurs2img.svg" alt="" />
            <img className="kurs3" src="/kurs3img.svg" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="section_12">
            <h2>Стоимость курса</h2>
            <div className="section_12-items">
              <div className="section_12-right">
                <div className="right">
                  <h4>Стоимость курса</h4>
                  <p
                    style={{
                      color: "#6E6D77",
                      fontWeight: "500",
                      fontSize: "18px",
                      marginTop: "16px",
                    }}
                  >
                    Получите основы и сделайте свой первый шаг в мир SEO
                  </p>
                  <div
                    style={{
                      margin: "47px 0px 12px 0px",
                      fontSize: "48px",
                      fontWeight: "600",
                      color: " #2A2941",
                    }}
                  >
                    <sup
                      style={{
                        fontWeight: "600",
                        fontSize: "24px",
                        color: " #2A2941",
                      }}
                    >
                      $
                    </sup>
                    546
                  </div>
                  <div
                    style={{
                      marginBottom: "36px",
                      color: "#6E6D77",
                      fontWeight: "400",
                      fontSize: "18px",
                    }}
                  >
                    На полный курс
                  </div>
                  <button
                    style={{
                      border: "none",
                      color: "white",

                      borderRadius: "14px",
                      background: "#4C5EFE",
                      width: "100%",
                    }}
                  >
                    Зарегистрироваться
                  </button>
                </div>
                <div className="left">
                  <h4>Что в плане?</h4>
                  <div className="s10-item">
                    <img src="/galochka yashil.svg" alt="" />
                    <span>Участие во всех занятиях курса</span>
                  </div>
                  <div className="s10-item">
                    <img src="/galochka yashil.svg" alt="" />
                    <span>Общение в студенческом чате</span>
                  </div>
                  <div className="s10-item">
                    <img src="/galochka yashil.svg" alt="" />
                    <span>
                      Выполнение первого домашнего задания и еще двух на выбор
                    </span>
                  </div>
                  <div className="s10-item">
                    <img src="/galochka yashil.svg" alt="" />
                    <span>Подписка на бонусные лекции IAMPM</span>
                  </div>
                  <div className="s10-item">
                    <img src="/galochka yashil.svg" alt="" />
                    <span>
                      Доступ к видео-записям занятий в процессе прохождения
                      курса и месяц после
                    </span>
                  </div>
                </div>
              </div>
              <div className="section_12-left">
                <h4>Условия рассрочки</h4>
                <div className="s10-item">
                  <img src="/galochka yashil.svg" alt="" />
                  <span>Участие во всех занятиях курса</span>
                </div>
                <div className="s10-item">
                  <img src="/galochka yashil.svg" alt="" />
                  <span>Общение в студенческом чате</span>
                </div>
                <div className="s10-item">
                  <img src="/galochka yashil.svg" alt="" />
                  <span>
                    Выполнение первого домашнего задания и еще двух на выбор
                  </span>
                </div>
                <div className="s10-item">
                  <img src="/galochka yashil.svg" alt="" />
                  <span>Подписка на бонусные лекции IAMPM</span>
                </div>
                <div className="s10-item">
                  <img src="/galochka yashil.svg" alt="" />
                  <span>
                    Доступ к видео-записям занятий в процессе прохождения курса
                    и месяц после
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section_13">
            <h2 className="section_13-title">Частые вопросы</h2>
            <div className="section_13-accordion">
              <div>
                <div
                  className="accordion-item"
                  style={{
                    marginBottom: "16px",
                    border: "1px solid #E9E9EB",
                    borderRadius: "16px",
                  }}
                >
                  <h2
                    className="accordion-header"
                    id="flush-headingOne"
                    style={{ border: "none!important" }}
                  >
                    <button
                      className="accordion-button  collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                      style={{ padding: "24px" }}
                    >
                      Полезен ли курс для тех, кто имеет поверхностные
                      представления о SEO?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                    /*  data-bs-parent="#accordionExample" */
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          Учебный план составлен таким образом, чтобы
                          представленная информация была полезна учащимся с
                          различной степенью знаний. Даже продвинутые в
                          профессии люди найдут для себя что-то интересное и
                          новое.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  style={{
                    marginBottom: "16px",
                    border: "1px solid #E9E9EB",
                    borderRadius: "16px",
                  }}
                >
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                      style={{ padding: "24px" }}
                    >
                      Можно ли задавать вопросы преподавателю?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                    /* data-bs-parent="#accordionExample" */
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          Учебный план составлен таким образом, чтобы
                          представленная информация была полезна учащимся с
                          различной степенью знаний. Даже продвинутые в
                          профессии люди найдут для себя что-то интересное и
                          новое.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  style={{
                    marginBottom: "16px",
                    border: "1px solid #E9E9EB",
                    borderRadius: "16px",
                  }}
                >
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                      style={{ padding: "24px" }}
                    >
                      Можно ли работать SEO-экспертом после окончания курса?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          Учебный план составлен таким образом, чтобы
                          представленная информация была полезна учащимся с
                          различной степенью знаний. Даже продвинутые в
                          профессии люди найдут для себя что-то интересное и
                          новое.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  style={{
                    marginBottom: "16px",
                    border: "1px solid #E9E9EB",
                    borderRadius: "16px",
                  }}
                >
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                      style={{ padding: "24px" }}
                    >
                      Предоставляются ли документы после окончания курса?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          Учебный план составлен таким образом, чтобы
                          представленная информация была полезна учащимся с
                          различной степенью знаний. Даже продвинутые в
                          профессии люди найдут для себя что-то интересное и
                          новое.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  style={{
                    marginBottom: "16px",
                    border: "1px solid #E9E9EB",
                    borderRadius: "16px",
                  }}
                >
                  <h2 className="accordion-header" id="flush-headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                      style={{ padding: "24px" }}
                    >
                      Как проходит оплата курса?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          Учебный план составлен таким образом, чтобы
                          представленная информация была полезна учащимся с
                          различной степенью знаний. Даже продвинутые в
                          профессии люди найдут для себя что-то интересное и
                          новое.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="contact">
          <div className="section_14">
            <div className="s14_contact">
              <img
                className="s14_contact-vector"
                src="/contactimg.svg"
                alt=""
              />
              <h2>Узнать как получить скидку</h2>
              <p style={{ color: "#6E6D77", margin: "16px 0px 36px" }}>
                Заполни заявку на получение скидки
              </p>

              <div className="contact">
                <img src="/contact1.svg" alt="" />
                <a href="tel:+12158162097">+12158162097</a>
              </div>
              <div className="contact">
                <img src="/contact2.svg" alt="" />
                <span style={{ margin: "0" }}>info.exadot@gmail.com</span>
              </div>
              <div className="contact">
                <img src="/contact3.svg" alt="" />
                <span style={{ margin: "0" }}>
                  Philadelphia, Nester Pl, APT 15, 1900
                </span>
              </div>
            </div>
            <div>
              <form>
                <input
                  name="name"
                  type="text"
                  className="feedback-input"
                  placeholder="First name"
                />
                <input
                  name="name"
                  type="text"
                  className="feedback-input"
                  placeholder="Phone  number"
                />
                <input
                  name="name"
                  type="text"
                  className="feedback-input"
                  placeholder="Email"
                />
                <textarea
                  name="text"
                  className="feedback-input savol"
                  placeholder="Message"
                ></textarea>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    I accept Terms and Conditions
                  </label>
                </div>
                <button className="yuborish">Get a quote</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Homee>
  );
}
