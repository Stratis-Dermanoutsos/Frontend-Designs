import React from 'react'

export default function Input({ type, placeholder }: { type: string; placeholder: string }) {
    return (
        <input className="border-secondary col-12 form-control mb-3 px-3 py-2 rounded-pill" type={type} placeholder={placeholder} required />

    )
}
