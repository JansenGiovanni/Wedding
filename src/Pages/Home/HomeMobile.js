import React from 'react';
import InvitationMobile from '../Invitation/InvitationMobile';
import OpeningMobile from '../Opening/OpeningMobile';
import ProfileMobile from '../Profile/ProfileMobile';
import Background from '../../Components/Background/Background';
import EventMobile from '../Event/EventMobile';
import GalleryMobile from '../Gallery/GalleryMobile';
import AudioPlayer from '../../Components/Audio/Audio';
import GiftMobile from '../Gift/GiftMobile';
import './HomeMobile.css';

function HomeMobile(){
    return (
        <div>
            <Background></Background>
            <InvitationMobile></InvitationMobile>
            <OpeningMobile></OpeningMobile>
            <ProfileMobile></ProfileMobile>
            <EventMobile></EventMobile>
            <GalleryMobile></GalleryMobile>
            <GiftMobile></GiftMobile>
            <AudioPlayer></AudioPlayer>
        </div>
    );
}

export default HomeMobile;