import React from 'react'

export default function ToggleSwitch({ checked, onChange }) {
  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        className='sr-only'
        checked={checked}
        onChange={onChange}
      />
      <span
        className={`block w-12 h-6 rounded-full ${
          checked ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`dot absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform transform ${
            checked ? 'translate-x-full' : 'translate-x-0'
          }`}
        />
      </span>
    </label>
  )
}
