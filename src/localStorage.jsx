import React, { Component } from 'react';

class Storage extends Component {

    constructor(props) {
        super(props);
    }

    static get(name) {
        const value = localStorage.getItem(name);
        if (value) return JSON.parse(value);
        return value;
    }

    static has(name) {
        return Storage.get(name) !== undefined;
    }

    static set(name, value) {
        name = name || this.props.name;
        return localStorage.setItem(name, JSON.stringify(value));
    }
}