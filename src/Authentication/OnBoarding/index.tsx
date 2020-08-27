import React, { useRef } from "react";
import { Dimensions } from "react-native";
import { useValue, onScrollEvent, interpolateColor } from "react-native-redash";
import Animated, { multiply } from "react-native-reanimated";

import Slide from "../../Components/Slide";
import SubSlide from "../../Components/SubSlide";

import { Container, Slider, Footer, Foot, Background } from "./styles";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit there!",
    color: "#bfeaf5",
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the closes in your wardrobe? Explore hundreds of outfits ideas.",
    color: "#beecc4",
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual and unique style and look amazing everyday.",
    color: "#ffe4d9",
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the last trends on fashion and explore your personality",
    color: "#ffdddd",
  },
];

const OnBoarding = () => {
  const x = useValue(0);

  const onScroll = onScrollEvent({ x });

  const backgroundColor = interpolateColor(x, {
    inputRange: [0, width, width * 2, width * 3],
    outputRange: ["#bfeaf5", "#beecc4", "#ffe4d9", "#ffdddd"],
  });

  const scroll = useRef<Animated.ScrollView>(null);

  return (
    <Container>
      <Slider
        ref={scroll}
        height={height}
        style={{ backgroundColor }}
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={1}
        {...{ onScroll }}
      >
        {slides.map(({ title }, index) => (
          <Slide
            key={index}
            width={width}
            height={height}
            label={title}
            right={!!(index % 2)}
          />
        ))}
      </Slider>

      <Footer>
        <Background style={{ backgroundColor }} />
        <Foot
          style={{
            width: width * slides.length,
            transform: [{ translateX: multiply(x, -1) }],
            borderTopLeftRadius: 75,
          }}
        >
          {slides.map(({ subtitle, description }, index) => (
            <SubSlide
              key={index}
              subtitle={description}
              title={subtitle}
              last={index === slides.length - 1}
              onPress={() => {
                if (scroll.current) {
                  scroll.current.getNode().scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }
              }}
            />
          ))}
        </Foot>
      </Footer>
    </Container>
  );
};

export default OnBoarding;
