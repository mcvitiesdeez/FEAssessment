import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
    return (
        <Container className="p-5">
            <div className='video-responsive d-flex justify-content-center'>
                <iframe style={{ borderRadius: "7px" }} width="640" height="360" src="https://www.youtube.com/embed/s1fxZ-VWs2U?si=B3UqHsrLHSaSJHum" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <div className='mt-5'>
                <h2>Why build a PC?</h2>
                <ol className='pt-3'>
                    <li className="my-3"><strong>Tailored Performance:</strong> A custom-built PC allows you to select specific components that match your needs, whether it&apos;s for gaming, graphic design, or productivity. You can prioritize the CPU, GPU, memory, or storage based on your primary use.</li>
                    <li className="my-3"><strong>Cost Efficiency:</strong> While pre-built systems come with a markup for assembly and warranties, building your own PC lets you allocate your budget more effectively, often getting better performance for your money by choosing the best deals on components.</li>
                    <li className="my-3"><strong>Upgrade Flexibility:</strong> A custom PC is easier to upgrade over time. Instead of replacing the entire system, you can upgrade individual parts like the GPU, RAM, or storage, ensuring your PC stays relevant and powerful for longer.</li>
                    <li className="my-3"><strong>Quality Control:</strong> You have full control over the quality of each component, avoiding lower-grade parts that may come in pre-built machines. This allows for better reliability and longevity.</li>
                    <li className="my-3"><strong>Personal Satisfaction and Learning:</strong> Building a PC from scratch can be a rewarding experience. It teaches you more about computer hardware, troubleshooting, and system maintenance, giving you more confidence in managing your machine.</li>
                </ol>
            </div>
        </Container>
    )
}
