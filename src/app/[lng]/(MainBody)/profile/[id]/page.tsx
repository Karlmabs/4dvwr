"use client";
import React, { useCallback, useEffect, useState } from "react";
import AboutTab from "@/Components/Applications/SocialApp/UserContext/AboutTab";
import { Container } from "reactstrap";
import UserProfile from "@/Components/Applications/SocialApp/UserProfile/UserProfile";
import { getProfile } from "@/services/apis";
import { Profile } from "@/Types/ProfileType";

const profile = ({ params }: { params: { id: string } }) => {
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    getProfile(params.id as string).then(setProfile);
  }, [params.id]);

  const [activeTab, setActiveTab] = useState(1);
  const callback = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);

  return (
    <Container fluid>
      <div className="user-profile social-app-profile">
        <UserProfile callback={callback} name={profile?.username!} />
        <AboutTab profile={profile!} />
      </div>
    </Container>
  );
};

export default profile;
