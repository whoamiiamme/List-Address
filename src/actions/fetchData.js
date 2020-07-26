import firebase from 'firebase';
import { FETCH_ADDRESSES,
    FETCH_ADDRESS,
    EDIT_ADDRESS ,
    DEL_ADDRESS,
    ADD_ADDRESS } from './type';


    export const getListData = ( ) => {
        return dispath => {
            firebase.database().ref('addressinvietnam')
            .once('value').then(addresses => {
                 dispath({
                     type: FETCH_ADDRESSES,
                     payload: addresses.val()
                 })
            })
        }
    }

    export const getAddress = (id) => {
        return dispatch => {
            firebase.database().ref(`addressinvietnam/${id}`)
            .on('value', value => {
                
                dispatch({
                    type: FETCH_ADDRESS,
                    payload: value.val()
                })
            })
        }
    }

    export const postAddress = (id, formValues) => {
        return dispatch => {
            firebase.database().ref(`addressinvietnam/${id}`)
            .set({
                ...formValues
            },error => {
                if(error){

                } else {
                    dispatch({
                        type: ADD_ADDRESS,
                        payload: formValues
                    })
                }
            });

        }
    }

    export const editAdress = (id, formValues) => {
        return dispatch => {
            firebase.database().ref(`addressinvietnam/${id}`)
            .set({
                ...formValues
            },error => {
                if(error){

                } else {
                    dispatch({
                        type: EDIT_ADDRESS,
                        payload: formValues
                    })
                }
            })
        }
    }

    export const delAddress = id => {
        return dispatch => {
            firebase.database().ref(`addressinvietnam/${id}`)
            .set({ },error => {
                if(error){

                } else {
                    dispatch({
                        type: DEL_ADDRESS,
                        payload: id
                    })
                }
            })
        }
    }