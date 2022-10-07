import { Button } from '@mui/material'
import { Teacher } from '../../@types/teacher'
import * as S from './List.styled'

interface ListProps {
  teachers: Teacher[]
}

const List = (props: ListProps) => {
  return (
    <div>
      {props.teachers.length > 0 ? (
        <S.ListStyled>
          {props.teachers.map(teacher => (
            <S.ListItemStyled key={teacher.id}>
              <S.FotoStyled src={teacher.avatar} alt={teacher.name} />
              <S.InformationStyled>
                <S.NameStyled>{teacher.name}</S.NameStyled>
                <S.ValueStyled>
                  {teacher.value.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL',
                  })}{' '}
                  por hora
                </S.ValueStyled>
                <S.DescriptionStyled>{teacher.description}</S.DescriptionStyled>
                <Button sx={{ width: '70%', borderRadius: '6px' }}>
                  Marcar aula com {teacher.name}
                </Button>
              </S.InformationStyled>
            </S.ListItemStyled>
          ))}
        </S.ListStyled>
      ) : (
        <S.ListStyledClean>Nenhum professor encontrado !!!</S.ListStyledClean>
      )}
    </div>
  )
}

export default List
