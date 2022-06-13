import styled from "styled-components";

const AboutPageContainer = styled.div`
  background: #f5f5f5;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.7em;
  }

  .decoration-line {
    width: 275px;
    height: 4px;
    background: linear-gradient(90deg, #ffac12 0%, #000000 94.96%);
    border-radius: 2px;
  }

  p {
    margin: 15px 35px 35px 35px;
  }

  .photo-home {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const AboutPage = (): JSX.Element => {
  return (
    <AboutPageContainer>
      <img
        src="images/casa-home.jpg"
        alt="rustik-house"
        className="photo-home"
      />
      <div className="decoration-line"></div>
      <h2>The best choice</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        lobortis ex a velit tempus molestie. Proin sed sem turpis. Praesent
        sagittis felis non lectus gravida, eu venenatis magna pellentesque.
        Integer eget aliquet ligula. Curabitur tempor purus sit amet magna
        dignissim fringilla. Cras rutrum sodales tellus, vitae gravida sem
        ornare eget. Nunc sit amet arcu eget ex dignissim pretium. Donec sed
        fermentum orci. Nullam vehicula sapien id mauris aliquam suscipit. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, augue
        vitae eleifend tempus, orci purus rutrum eros, in rhoncus arcu arcu
        condimentum magna. Nunc sollicitudin mauris vitae pretium porta. Fusce
        ac rhoncus quam. Proin venenatis interdum commodo. Aenean non rutrum ex,
        eu fringilla arcu. Sed lacus metus, vehicula vitae scelerisque non,
        accumsan at massa. Etiam interdum quis purus sagittis consequat. Sed vel
        tincidunt mauris. Aenean nibh massa, ullamcorper at euismod vitae,
        mollis eu lorem. Proin sed tempus justo, eu semper ligula. Mauris urna
        purus, facilisis sed iaculis et, semper eu enim. Quisque posuere
        bibendum metus ut sollicitudin.
      </p>
    </AboutPageContainer>
  );
};

export default AboutPage;
