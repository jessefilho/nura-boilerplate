import { defineStore } from 'pinia'

const namespaced = "alerts"
const state = () => ({
// defines the value of the type attribute to pass to a component <v-alert> (Success, info, warning or error)
    type: null,
// defines a message to pass to a component <v-alert>
    message: null,
});

/**
 * Set state, reuse mutation function to avoid code duplication
 * @param payload
 * @constructor
 */
const SET_TYPE_AND_MESSAGE= (_this,payload) => {
    _this.type = String(payload.type);
    _this.message = String(payload.message);
};

const CLEAR = (_this) => {
    setTimeout(() => {
        _this.type = null
        _this.message = null
    }, 3000);

};

const actions = {
    // Action to dispatch to pass success type values to a <v-alert> component
    success(message) {
        SET_TYPE_AND_MESSAGE(this,{type: 'success', message: message})
        CLEAR(this)
    },
// Action to dispatch to pass error type values to a <v-alert> component
    error(message) {
        SET_TYPE_AND_MESSAGE(this,{type: 'error', message: message})
        CLEAR(this)
    },
// Action to dispatch to pass info type values to a <v-alert> component
    info(message) {
        SET_TYPE_AND_MESSAGE(this,{type: 'info', message: message})
        CLEAR(this)
    },
// Action to dispatch to pass warning type values to a <v-alert> component
    warning(message) {
        SET_TYPE_AND_MESSAGE(this,{type: 'warning', message: message})
        CLEAR(this)
    },
};

export const useAlerts = defineStore(namespaced,{
    namespaced: true,
    state,
    actions
})
