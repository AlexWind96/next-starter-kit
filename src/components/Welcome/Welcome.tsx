import { Text, Title } from '@mantine/core'

import useStyles from './Welcome.styles'

export function Welcome() {
  const { classes } = useStyles()

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Next Template
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This is my starter kit for next project
      </Text>
    </>
  )
}
