export interface CrewModel{
    rol: CrewRole;
    name: string;
    information: string
    order: number;
    image: string;
}

export enum CrewRole{
    Commander = 'COMMANDER',
    MissionSpecialist = "MISSION SPECIALIST",
    Pilot = "PILOT",
    FlightEngineer = "FLIGHT ENGINEER"
}