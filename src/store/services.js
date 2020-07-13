import axios from "axios"
import {
  CHECKOPERATIONID11_USERNAME,
  CHECKOPERATIONID11_PASSWORD,
  CHECKOPERATIONIDPLUGIN1_USERNAME,
  CHECKOPERATIONIDPLUGIN1_PASSWORD,
  CHECKOPERATIONSID4_USERNAME,
  CHECKOPERATIONSID4_PASSWORD,
  CHECKOPERATIONSID3_USERNAME,
  CHECKOPERATIONSID3_PASSWORD,
  CHECKOPERATIONSID2_USERNAME,
  CHECKOPERATIONSID2_PASSWORD,
  CHECKOPERATIONSID1_USERNAME,
  CHECKOPERATIONSID1_PASSWORD
} from "react-native-dotenv"
const checkoperationid11 = axios.create({
  baseURL: "https://www.google.com",
  auth: {
    username: CHECKOPERATIONID11_USERNAME,
    password: CHECKOPERATIONID11_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const checkoperationidplugin1 = axios.create({
  baseURL: "https://www.google.com",
  auth: {
    username: CHECKOPERATIONIDPLUGIN1_USERNAME,
    password: CHECKOPERATIONIDPLUGIN1_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const checkoperationsid4 = axios.create({
  baseURL: "https://www.google.com",
  auth: {
    username: CHECKOPERATIONSID4_USERNAME,
    password: CHECKOPERATIONSID4_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const checkoperationsid3 = axios.create({
  baseURL: "https://www.google.com",
  auth: {
    username: CHECKOPERATIONSID3_USERNAME,
    password: CHECKOPERATIONSID3_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const checkoperationsid2 = axios.create({
  baseURL: "https://www.google.com",
  auth: {
    username: CHECKOPERATIONSID2_USERNAME,
    password: CHECKOPERATIONSID2_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const checkoperationsid1 = axios.create({
  baseURL: "https://www.google.com",
  auth: {
    username: CHECKOPERATIONSID1_USERNAME,
    password: CHECKOPERATIONSID1_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const testOperationID1API = axios.create({
  baseURL: "https://testoperationid1-dev-7536.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function checkoperationid11_get_apple_id_read({ id }) {
  return checkoperationid11.get(`/apple/{id}`, { params: { id: id } })
}
function checkoperationidplugin1_get_orange_id_read({ id }) {
  return checkoperationidplugin1.get(`/orange/{id}`, { params: { id: id } })
}
function checkoperationsid4_get_patient_id_read({ id }) {
  return checkoperationsid4.get(`/patient/{id}`, { params: { id: id } })
}
function checkoperationsid3_get_patient_id_read({ id }) {
  return checkoperationsid3.get(`/patient/{id}`, { params: { id: id } })
}
function checkoperationsid2_get_patient_id_read({ id }) {
  return checkoperationsid2.get(`/patient/{id}`, { params: { id: id } })
}
function checkoperationsid1_get_patient_id_read({ id }) {
  return checkoperationsid1.get(`/patient/{id}`, { params: { id: id } })
}
function api_v1_customtext_list() {
  return testOperationID1API.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return testOperationID1API.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return testOperationID1API.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return testOperationID1API.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_homepage_list() {
  return testOperationID1API.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return testOperationID1API.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return testOperationID1API.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return testOperationID1API.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_login_create() {
  return testOperationID1API.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return testOperationID1API.post(`/api/v1/signup/`, requestBody)
}
function rest_auth_login_create(requestBody) {
  return testOperationID1API.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return testOperationID1API.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return testOperationID1API.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return testOperationID1API.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return testOperationID1API.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return testOperationID1API.post(
    `/rest-auth/password/reset/confirm/`,
    requestBody
  )
}
function rest_auth_registration_create(requestBody) {
  return testOperationID1API.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return testOperationID1API.post(
    `/rest-auth/registration/verify-email/`,
    requestBody
  )
}
function rest_auth_user_read() {
  return testOperationID1API.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return testOperationID1API.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return testOperationID1API.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  checkoperationid11_get_apple_id_read,
  checkoperationidplugin1_get_orange_id_read,
  checkoperationsid4_get_patient_id_read,
  checkoperationsid3_get_patient_id_read,
  checkoperationsid2_get_patient_id_read,
  checkoperationsid1_get_patient_id_read,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
