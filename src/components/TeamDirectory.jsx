import TeamMemberCard from "./TeamMemberCard";
import teamMembers from "./TeamMembers";
import "./teamDirectory.css";

const TeamDirectory = () => {
    return (
        <div className="team-directory">
            <h2>Meet Our Team</h2>
            <div className="team-list">
                {teamMembers.map((member) => (
                    <TeamMemberCard
                        key={member.id}
                        name={member.name}
                        role={member.role}
                        location={member.location}
                        photo={member.photo}
                    />
                ))}
            </div>
        </div>
    )
}

export default TeamDirectory;