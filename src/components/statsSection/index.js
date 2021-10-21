import React from 'react';

// TODO: Should come from backend

const stats = [
    {title: 'Finished Projects', value: 5240},
    {title: 'Individuals', value: 2490},
    {title: 'Business', value: 250},
    {title: 'Companies', value: 500},
];

const StatsSection = () => {
    return (
        <div className="stats-section container-fluid">
            <div className="stats-wrapper">
                <div className="stats-row row">
                    {stats.map(({title, value}) => (
                        <div key={title}
                             className="stat col-6 col-sm-3 d-flex justify-content-center text-center text-sm-left">
                            <div>
                                <div className="color-secondary ft-x-huge ft-weight-medium">{value}+</div>
                                <div className="color-gray-2 ft-medium ft-weight-medium">{title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default StatsSection;
