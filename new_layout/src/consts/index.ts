import ParticipantsPage from '@pages/Participants.page'
import PersonalAreaPage from '@pages/PersonalArea.page'
import ProjectsPage from '@pages/Projects.page'
import RulebookPage from '@pages/Rulebook.page'

import { MenuDefinition } from '@types'

export const MenuDefinitions: Array<MenuDefinition> = [
    {label: 'Projetos', link: '/foo', page: ProjectsPage},
    {label: 'Regras e Princípios', link: '/foo', page: RulebookPage},
    {label: 'Participantes', link: '/foo', page: ParticipantsPage},
    {label: 'Minha Área', link: '/foo', page: PersonalAreaPage},
]