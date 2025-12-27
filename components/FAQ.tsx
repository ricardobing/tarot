import Section from './Section'
import SectionTitle from './SectionTitle'
import FAQAccordion from './FAQAccordion'

export default function FAQ() {
  const faqs = [
    {
      question: '¿Cuánto dura una consulta?',
      answer: 'Depende del tipo de tirada que elijas. Las consultas específicas duran entre 30-40 minutos, las generales 45-60 minutos, y las de año personal pueden extenderse hasta 75 minutos. Siempre nos tomamos el tiempo necesario para que te vayas con claridad.',
    },
    {
      question: '¿Cómo es el pago?',
      answer: 'Una vez que coordinamos la consulta por WhatsApp, te comparto los datos para transferencia bancaria o MercadoPago. El pago se realiza antes de la sesión para confirmar el turno.',
    },
    {
      question: '¿Puedo consultar desde otro país?',
      answer: '¡Por supuesto! Trabajo 100% online y tengo consultantes de toda Latinoamérica y España. Solo necesitás conexión a internet y WhatsApp o Zoom para la videollamada.',
    },
    {
      question: '¿Es confidencial mi consulta?',
      answer: 'Absolutamente. Todo lo que compartís queda en total confidencialidad. Trabajamos con respeto, ética profesional y en un espacio de confianza. Nunca comparto información de mis consultantes.',
    },
    {
      question: '¿Qué necesito para la consulta?',
      answer: 'Solo necesitás un momento tranquilo, conexión a internet, y tu pregunta o inquietud. Podemos hacer la consulta por videollamada de WhatsApp, Zoom, o si preferís solo audio también es posible.',
    },
    {
      question: '¿Puedo hacer preguntas específicas?',
      answer: 'Sí, totalmente. De hecho, mientras más clara sea tu pregunta, más precisa será la orientación de las cartas. Durante la consulta también podés hacer todas las preguntas que necesites.',
    },
    {
      question: '¿Cuándo voy a recibir respuesta?',
      answer: 'Respondo mensajes de WhatsApp en menos de 24 horas, generalmente mucho antes. Una vez que nos contactamos, coordinamos la consulta para los próximos días según disponibilidad.',
    },
    {
      question: '¿Hacés tiradas para otras personas?',
      answer: 'Puedo hacer tiradas consultando por otra persona (por ejemplo, tu pareja o un familiar), pero siempre es mejor que la persona consulte directamente si es posible, ya que su energía y participación enriquecen la lectura.',
    },
  ]

  return (
    <Section id="preguntas-frecuentes" background="light">
      <SectionTitle 
        title="Preguntas Frecuentes"
        subtitle="Resolvé tus dudas antes de agendar tu consulta"
      />

      <FAQAccordion faqs={faqs} />

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          ¿Tenés otra pregunta? No dudes en escribirme
        </p>
        <a 
          href={`https://wa.me/5493442625134?text=${encodeURIComponent('Hola, tengo una pregunta sobre las consultas')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-mystic-600 font-semibold hover:text-mystic-700 transition-colors"
        >
          Contactar por WhatsApp →
        </a>
      </div>
    </Section>
  )
}
