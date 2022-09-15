import React from 'react'
import { ComponentMeta } from '@storybook/react'

import Home from './index'

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>

export const HomePage = () => <Home />
