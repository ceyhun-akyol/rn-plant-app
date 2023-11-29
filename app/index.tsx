import React from 'react';
import type {PropsWithChildren} from 'react';
import Config from 'react-native-config';

import StorybookUIRoot from '../.storybook/Storybook';

import {StatusBar, useColorScheme} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  SectionContainer,
  SectionTitle,
  SectionDescription,
  Highlight,
  StyledSafeAreaView,
  StyledScrollView,
  ContentContainer,
} from './style';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SectionContainer>
      <SectionTitle theme={{isDarkMode}}>{title}</SectionTitle>
      <SectionDescription theme={{isDarkMode}}>{children}</SectionDescription>
    </SectionContainer>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  if (Config.SHOW_STORYBOOK === 'true') {
    return <StorybookUIRoot />;
  }

  return (
    <StyledSafeAreaView theme={{isDarkMode}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#1C1C1E' : '#F3F3F3'}
      />
      <StyledScrollView
        contentInsetAdjustmentBehavior="automatic"
        theme={{isDarkMode}}>
        <Header />
        <ContentContainer theme={{isDarkMode}}>
          <Section title="Step One">
            Edit <Highlight>App.tsx</Highlight> to change this screen and then
            come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </ContentContainer>
      </StyledScrollView>
    </StyledSafeAreaView>
  );
}
export default App;
