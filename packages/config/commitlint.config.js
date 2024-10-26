module.exports = {
  extends: [],
  rules: {
    'ani-jira-rule': [2, 'always']
  },
  plugins: [
    {
      rules: {
        'ani-jira-rule': (parsed) => {
          // 커밋 메시지에서 '[MOBI-(이슈 번호)-setting]' 패턴을 제외한 나머지 부분
          const modifiedHeader = parsed.raw.replace(/^\[ANI-\d+-[^\]]+\]\s* /, '')
          // 수정된 헤더로부터 type과 subject를 추출
          const match = modifiedHeader.match(/(\w+): (.+)/)
          if (match) {
            const [_, type, subject] = match
            // type과 subject가 비어있지 않은지 확인
            if (type && subject) {
              return [true]
            }
          }
          return [
            false,
            '올바른 형태의 커밋 메시지가 아닙니다. 형식은 "커밋 유형(Sentence Case (ex. Feat, Fix, Chore, Add)): 커밋 메시지"입니다.'
          ]
        }
      }
    }
  ]
}
