import React from 'react';

function Feed() {
    
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Feed</h6>
            </div>
            <div class="card-body">
                <b>Mon, 13 Apr</b><br/> 
                    <span className="ml-4">Takuji has spent <b>23</b> hours at home, <b>1</b> hour outside.</span> 
                <p/>

                <b>Sun, 12 Apr</b><br/> 
                    <span className="ml-4">Takuji has spent <b>22</b> hours at home, <b>2</b> hour outside.</span> 
                <p/>
                
                <b>Sun, 11 Apr</b><br/> 
                    <span className="ml-4">Takuji has spent <b>24</b> hours at home, <b>0</b> hour outside. </span>
                <p/>
                <p/>
            </div>
        </div>    
    )

}

export default Feed;