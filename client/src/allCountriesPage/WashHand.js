import React from 'react';
import doctorImg from '../img/undraw_medical_research_qg4d.svg';

function WashHand() {
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Wash Your Hands - Advice from WHO</h6>
            </div>
            <div className="card-body">
            <h4 className="font-weight-bold">Clean Hands Protect Against Infection</h4>

            <img class="mt-2 mb-4" src={doctorImg} width="75%" />

            <h5 className="font-weight-bold">Protect yourself</h5>
            <ul>
                <li>Clean your hands regularly.</li>
                <li>Wash your hands with soap and water, and dry them thoroughly.</li>
                <li>Use alcohol-based handrub if you don’t have immediate access to soap and water.</li>
            </ul>
            
            <h5 className="font-weight-bold">How do I wash my hands properly?</h5>
            Washing your hands properly takes about as long as singing "Happy Birthday" twice. <p/>

            <small>Source: https://www.who.int/gpsc/clean_hands_protection/en/</small>

            </div>
        </div>
    );
}
export default WashHand;
