import ParticipantsPage from '@pages/Participants.page'
import PersonalAreaPage from '@pages/PersonalArea.page'
import ProjectsPage from '@pages/Projects.page'
import RulebookPage from '@pages/Rulebook.page'

import React from 'react'

export const MenuDefinitions: Array<HacktoberTypes.MenuItem> = [
    {label: 'Projetos', link: '/foo', page: ProjectsPage},
    {label: 'Regras e Princípios', link: '/foo', page: RulebookPage},
    {label: 'Participantes', link: '/foo', page: ParticipantsPage},
    {label: 'Minha Área', link: '/foo', page: PersonalAreaPage},
]
