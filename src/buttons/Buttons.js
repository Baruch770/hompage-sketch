import React from 'react';
import "./style.css"

export function BtnOrng({ btnName, style }) {
    return (
        <div>
            <button
                type="button"
                className="btn btn-orng"
                style={style}
            >
                {btnName}
            </button>
        </div>
    )
}

export function BtnWht({ btnName, style }) {
    return (
        <div>
            <button
                type="button"
                class="btn btn-wht"
                style={style}
            >
                {btnName}
            </button>
        </div>
    )
}

