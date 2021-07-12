import { useStore } from '../../store';
import { Container, Project } from '../../components';
import { Projects } from '../portfolio/projects';

export const Main: React.FC = () => {
    useStore.setState({headerType: "big"});

    return (
        <div className="bg-blue-800">
            <Container>
                <div className="text-white tracking-widest py-20">
                    PROJECTS
                </div>
                {Projects.map((props) =>
                    <Project 
                        title={props.title}
                        type={props.type}
                        imgSrc={props.imgSrc}
                        imgTitle={props.imgTitle}
                        readMoreLink={props.readMoreLink}
                        reverse={props.reverse}/>
                )}
            </Container>
        </div>
    );
};