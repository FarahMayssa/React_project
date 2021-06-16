import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Profil.css";

export default function Profil(props) {
  return (
    <div className="Profil">
      <div class="profile-view">
        <div class="profile-basic">
          <div class="row">
            <div class="profile-img">
              <img src="etudiant.jpg" alt="etudiant" />
            </div>

            <div class="col-sm-4">
              <div class="profile-info-left">
                <div class="staff-id">
                  <span class="title1">Name </span>
                  <span class="text1"> Ali</span>
                </div>
                <div class="staff-id">
                  <span class="title2">{props.title2}: </span>
                  <span class="text2">{props.text2}</span>
                </div>

                <div class="staff-id">
                  <span class="title3">{props.title3} : </span>
                  <span class="text3">{props.text3}</span>
                </div>
                <div class="staff-id">
                  <span class="title4">{props.title4} </span>
                  <span class="text4">{props.text4}</span>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <ul class="personal-info">
                <div>
                  <span class="title5">Numéro:</span>
                  <span class="text5">25252525</span>
                </div>
                <div>
                  <span class="title6">Email:</span>
                  <span class="text6">cristinagroves@example.com</span>
                </div>
                <div>
                  <span class="title7">Date de naissance:</span>
                  <span class="text7"> 3 mars 1996</span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
