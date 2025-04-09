import gcp from '../public/svg/skills/gcp.svg';
export const skillsImage=(skill)=>{
    const skillID=skill.toLowerCase();

    switch(skillID)
    {
        case 'gcp':
            return gcp;
        default:
            return gcp;
    }
}