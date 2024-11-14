const TeamMemberCard = ({ name, role, location, photo }) => {
    return (
        <div className="team-member-card">
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <p>{role}</p>
            <p>{location}</p>
        </div>
    );
}


export default TeamMemberCard;