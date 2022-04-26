import React from 'react'

export default function Form(props) {
    return (
        <div className="container">
            <div class="mb-3" style={{marginTop:"30px" }}>
                <label for="exampleFormControlTextarea1" class="form-label">Write your text in below textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
        </div>

    )
}
