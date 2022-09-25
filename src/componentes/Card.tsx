import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { mauve } from '@radix-ui/colors';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

const show = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const StyledContent = styled(HoverCardPrimitive.Content, {
  borderRadius: 4,
  padding: 15,
  width: 300,
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animation: `${show} 100ms linear`,
});

// Exports
export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardContent = StyledContent;

// Your app...
const Flex = styled('div', { display: 'flex' });

const Img = styled('img', {
  borderRadius: '100%',
  variants: {
    size: {
      normal: { width: 45, height: 45 },
      large: { width: 60, height: 60 },
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

const Text = styled('div', {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: '19px',
  variants: {
    faded: {
      true: { color: mauve.mauve10 },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

const HoverCardDemo = () => (
  <HoverCard>
    <HoverCardTrigger  href="https://www.instagram.com/pudimdalu01/">
      <Img src="./src/imagens/pudim.jpg"  />
    </HoverCardTrigger >
    <HoverCardContent  
    //  offset={5}
    >
      <Flex css={{ flexDirection: 'column', gap: 7 }}>
        <Img
          size="large"
          src="./src/imagens/pudim.jpg"
        />
        <Flex css={{ flexDirection: 'column', gap: 15 }}>
          <Text>
            <Text bold>Pudim da Lu</Text>
            <Text faded>@pudimdalu01</Text>
          </Text>
          <Text>
            O pudim número 01 🍮
            Feito com amor por @luroehrs
            📍 Entregas em Passo Fundo-RS
            Faça seu pedido 👇🏼
            wa.me/553299174320
            </Text>
            <Flex css={{ gap: 15 }}>
              <Flex css={{ gap: 5 }}>
                <Text bold>85</Text> <Text faded>Seguindo</Text>
              </Flex>
              <Flex css={{ gap: 5 }}>
                <Text bold>83</Text> <Text faded>Seguidores</Text>
              </Flex>
            </Flex>
        </Flex>
      </Flex>
    </HoverCardContent>
  </HoverCard>
);

export default HoverCardDemo;

