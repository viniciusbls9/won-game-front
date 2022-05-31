import { KeyboardArrowDown } from 'styled-icons/material-outlined'

import { ExploreSidebar, Grid, GameCard } from 'components'
import { ItemProps } from 'components/ExploreSidebar'
import { GameCardProps } from 'components/GameCard'
import { Base } from 'templates'

import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <S.GridContainer>
          <Grid>
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </Grid>

          <S.ShowMoreButton role="button" onClick={handleShowMore}>
            <S.ShowMoreButtonTitle>Show More</S.ShowMoreButtonTitle>
            <KeyboardArrowDown size={35} />
          </S.ShowMoreButton>
        </S.GridContainer>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
