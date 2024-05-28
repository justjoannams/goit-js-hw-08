import "../css/common.css";
import "../css/03-feedback.css";
import { throttle } from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const refs = {
  form: document.querySelector(".feedback-form"),
  textarea: document.querySelector(".feedback-form textarea"),
  input: document.querySelector("input"),
};
const formData = {};
